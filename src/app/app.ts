import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ServerList } from './components/server-list/server-list';

@Component({
        selector: 'app-root',   
        imports: [RouterOutlet, CommonModule, ServerList],
        templateUrl: './app.html',
        styleUrl: './app.scss',
        standalone: true
})
export class AppComponent implements OnInit {
        jeRozbaleno: boolean = false;

        // Signály pro stavy aplikace - správně nadefinované
        dataStatusu = signal<any>(null);
        loading = signal<boolean>(true);
        error = signal<string>("");

        // Výchozí nastavení režimu: true = světlý, false = tmavý
        jeSvetly: boolean = true;
        textStavu: string = "Načítám...";

        ngOnInit() {
                this.nactiData();

                // POLLING: Každých 30 sekund (30 000 ms) se funkce spustí znovu
                setInterval(() => {
                        this.nactiData();
                }, 30000);
        }

        async nactiData() {
                try {
                        const response = await fetch('http://localhost/eos-backend/status.php');
                        if (!response.ok) {
                                throw new Error('Chyba sítě');
                        }
                        
                        const data = await response.json();
                        
                        if (data) {
                                // Do signálu zapisujeme přes .set()
                                this.dataStatusu.set(data);

                                if (data.overallStatus === "operational") {
                                        this.textStavu = "All services are operational.";
                                } else if (data.overallStatusLabel) {
                                        this.textStavu = data.overallStatusLabel;
                                } else {
                                        this.textStavu = "All services are online";
                                }

                                //Vypnutí loadingu se musí provést přes .set(false)
                                this.loading.set(false);
                                this.error.set("");
                        }
                } catch (err) {
                        // I při chybě musíme loading vypnout přes .set(false)
                        this.loading.set(false);
                        this.error.set("Nepodarilo se nacist data.");
                }
        }

        prepniDropdown() {
                this.jeRozbaleno = !this.jeRozbaleno;
        }

        prepniRezim() {
               this.jeSvetly = !this.jeSvetly;

               if (!this.jeSvetly) {
                         document.body.classList.add('tmavy-rezim');
                }             
                else {
                        document.body.classList.remove('tmavy-rezim');
                }
        }
}