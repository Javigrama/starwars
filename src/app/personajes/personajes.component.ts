import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {


  resultado: any;
  // personajes: personaje[]=[]
  personajes: any[]=[]
  planeta: any = []
  url = 'https://swapi.dev/api/people?format=json'

  constructor(private httpservice: HttpService) { }

  ngOnInit(): void {

    this.httpservice.solicitar(this.url).subscribe(datos => {
      this.resultado = datos;
      this.personajes = this.resultado.results
      // this.mostrarPersonajes();
    })
  }

  mostrarPlaneta(evento: Event, homeworld: string){
    evento.preventDefault();
    this.httpservice.solicitar(homeworld).subscribe(datos => this.planeta = datos);
    console.log(this.planeta);
    // let elemento = evento.target as HTMLInputElement;
  }

  avanzar(evento: Event){

    if(this.resultado.next!=null){

      let urlSiguiente: string = this.resultado.next;

      this.httpservice.solicitar(urlSiguiente).subscribe(datos =>{
        this.personajes =[];
        this.resultado = datos;
        this.personajes = this.resultado.results

        // this.mostrarPersonajes();
      })
    }
  }
  retroceder(evento: Event){

    if(this.resultado.previous!=null){
      let urlPrevia: string = this.resultado.previous ;

      this.httpservice.solicitar(urlPrevia).subscribe(datos =>{
        this.personajes =[];
        this.resultado=datos;
        this.personajes = this.resultado.results

        // this.mostrarPersonajes();
      
    })
  }

  }

  mostrarPersonajes(){

    for(let p of this.resultado.results){

      this.personajes.push({nombre : p.name,
                            altura: p.height,
                            peso: p.mass,
                            color_pelo: p.hair_color,
                            color_ojos: p.eye_color,
                            color_piel: p.skin_color,
                            genero: p.gender,
                            planeta: p.homeworld
      })
    }
  }
}
interface personaje {
  nombre: string,
  altura: number,
  peso: number,
  color_pelo: string,
  color_ojos: string,
  color_piel: string,
  genero: string,
  planeta: string

}
