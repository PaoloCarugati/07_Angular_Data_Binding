import { Component, Input } from '@angular/core';
import { Musician } from './son-item.model';

@Component({
  selector: 'app-son-item',
  templateUrl: './son-item.component.html',
  styleUrls: ['./son-item.component.css']
})
export class SonItemComponent {
  @Input() musician: Musician;
}
