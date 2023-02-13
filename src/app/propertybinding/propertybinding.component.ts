import { Component } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent {
  p_class: string = "p-mio"; //p-mio-invisibile 
  button_disabled: boolean = false; //true
  h2_style: string = ""; //font-style: italic; 
}
