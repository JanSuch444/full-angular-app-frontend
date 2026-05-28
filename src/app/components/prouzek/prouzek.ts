import { Component, input, computed } from '@angular/core';
import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-prouzek',
  imports: [],
  templateUrl: './prouzek.html',
  styleUrl: './prouzek.scss',
})
export class Prouzek {
  stav = input.required<number>();

  textStavu= computed(() => {
    const aktualniStav = this.stav();
    if (aktualniStav === 2) return 'Výpadek';
    if (aktualniStav === 1) return 'Údržba';
    return 'Plne funkcni';
  });
}
