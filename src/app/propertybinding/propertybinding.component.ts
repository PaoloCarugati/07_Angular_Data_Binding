import { Component } from '@angular/core';
import { Musician } from './son-item/son-item.model';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent {
  p_class: string = "p-mio"; //p-mio-invisibile 
  button_disabled: boolean = false; //true
  h2_style: string = ""; //font-style: italic; 

  Rush: Musician[] = [
    {
      "Name": "Geddy",
      "Surname": "Lee",
      "Instrument": "Bass"
    },
    {
      "Name": "Alex",
      "Surname": "Lifeson",
      "Instrument": "Guitar"
    },
    {
      "Name": "Neil",
      "Surname": "Peart",
      "Instrument": "Drums"
    }  
  ];
}
