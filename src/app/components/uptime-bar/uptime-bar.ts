import { Component, input } from '@angular/core';
import { Prouzek } from '../prouzek/prouzek';

@Component({
  selector: 'app-uptime-bar',
  imports: [Prouzek],
  templateUrl: './uptime-bar.html',
  styleUrl: './uptime-bar.scss',
})
export class UptimeBar {
        // Signálový vstup pro pole čísel (historie)
        historie = input.required<{ status: number; cas: string}[]>();
}
