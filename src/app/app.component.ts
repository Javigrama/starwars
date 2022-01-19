import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //A css selector. elementos htmnl en la plantilla son instancias del componente
  templateUrl: './app.component.html', //que especifica a angular como renderizar el componente
  styleUrls: ['./app.component.css'] //que le dice a angular que apariencia debe tener el componente
})
export class AppComponent {
  title = 'starWars';
}
