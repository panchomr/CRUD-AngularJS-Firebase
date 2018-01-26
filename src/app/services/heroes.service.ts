import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../clases/heroe';
import 'rxjs/Rx';


@Injectable()
export class HeroesService {

  heroesURL:string = "https://heroesapp-807f7.firebaseio.com/heroes.json";
  heroeURL:string = "https://heroesapp-807f7.firebaseio.com/heroes/";

  constructor(private http:Http) { }

  nuevoHeroe( heroe:Heroe){
    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    return this.http.post( this.heroesURL,body,{headers} )
      .map( res=>{
          console.log(res.json());
          return res.json();
      })
  }
  ActualizaHeroe( heroe:Heroe,Key$:string){
    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    let url =  `${ this.heroeURL}/${Key$ }.json`;

    return this.http.put( url,body,{headers} )
      .map( res=>{
          console.log(res.json());
          return res.json();
      })
  }
  getHeroe(Key$:string){
    let url = `${ this.heroeURL}/${Key$ }.json`;
    return this.http.get(url)
      .map( res =>res.json());
  }
  getHeroes(){
    return this.http.get(this.heroesURL)
      .map(res =>res.json());
  }
  BorrarHeroe(Key$:string){
    let url =`${this.heroeURL}/${Key$}.json`;
    return this.http.delete(url)
      .map( res => res.json())

  }

}
