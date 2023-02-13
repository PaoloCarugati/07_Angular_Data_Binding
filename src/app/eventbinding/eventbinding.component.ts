import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent {
  testo_paragrafo: string = "testo del paragrafo";

  //versione 1
  onAnchorClick1() {
    alert("ciao!");
    return false;
  }

  //versione 2
  onAnchorClick2(text:HTMLInputElement): boolean {
    alert(text.value);
    return false;
  }


  //versione 3
  onAnchorClick3(text:HTMLInputElement): boolean {
    //alert(text.value);
    this.testo_paragrafo = text.value;
    return false;
  }

}
