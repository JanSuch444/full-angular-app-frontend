import { Component, input, computed } from '@angular/core';
import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-prouzek',
  imports: [],
  templateUrl: './prouzek.html',
  styleUrl: './prouzek.scss',
})
export class Prouzek {
  stav = input.required<{ status: number; cas: string}>()

  textStavu= computed(() => {
    const aktualniStav = this.stav().status;
    const casZaznamu = this.stav().cas;

    let stavText = 'Plne funkcni'
    if (aktualniStav === 2) stavText = 'Výpadek';
    if (aktualniStav === 1) stavText = "Údržba";
    return `${stavText} (${casZaznamu})`
  });
}
