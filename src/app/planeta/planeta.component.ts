import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-planeta',
  templateUrl: './planeta.component.html',
  styleUrls: ['./planeta.component.css']
})
export class PlanetaComponent implements OnInit {

  @Input() datos: any = "";

  constructor() { }

  ngOnInit(): void {
  }

}
