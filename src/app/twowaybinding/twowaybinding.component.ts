import { Component } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent {
  rangeValue: number = 5;

  onModificaValore(input: HTMLInputElement): boolean {
    this.rangeValue = parseFloat(input.value);
    return false;
  }
}
