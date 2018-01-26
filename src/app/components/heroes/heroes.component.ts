import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../clases/heroe';
import { setTimeout } from 'timers';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:any[]=[];
  loading : boolean =true;

  constructor(private _heroesService:HeroesService) {

    this._heroesService.getHeroes()
        .subscribe( data =>{
         
          
          setTimeout(()=>{
            this.loading =false; 
            this.heroes = data},3000);  
        })
          
        
  }

  ngOnInit() {
  }

  BorrarHeroe(Key$:string){
    this._heroesService.BorrarHeroe(Key$)
        .subscribe(respuesta =>{
          if(respuesta){
            console.error(respuesta);
          }else{
            delete this.heroes[Key$];
          }
          
        })

  }

}
