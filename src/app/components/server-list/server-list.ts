import { Component, input } from '@angular/core';
import { UptimeBar }  from '../uptime-bar/uptime-bar';
import { Prouzek } from "../prouzek/prouzek";

@Component({
  selector: 'app-server-list',
  imports: [UptimeBar, Prouzek],
  templateUrl: './server-list.html',
  styleUrl: './server-list.scss',
})
export class ServerList {
        // Signálový vstup, který přijímá pole serverů, nebo null při načítání
        servery = input.required<any[] | null>();

        vypoctiUptime(historie: { status: number; cas: string}[]): string {
                if (!historie || historie.length === 0) return '100%';

                console.log('Data pro server:', historie);

                const bezVypadku = historie.filter(bod  => {
                        return Number(bod.status) !== 2;
                }).length;

                const procenta = (bezVypadku  / historie.length) * 100;
                return procenta.toFixed(3) + '%';
        }
}        