import { Component, OnInit } from '@angular/core';
import { NgForm,FormGroup } from '@angular/forms';
import { Heroe } from '../../clases/heroe';
import { Router, ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  
  heroe: Heroe = {
    Nombre:"",
    Bio:"",
    Casa:"Marvel"
  }
  nuevo:boolean = false;
  id:string;

  constructor(private _heroesService:HeroesService,
              private router:Router,
              private route:ActivatedRoute) {
                
   this.route.params
      .subscribe(parametros =>{this.id = parametros['id']
    
      if(this.id !="nuevo"){
        this._heroesService.getHeroe(this.id)
          .subscribe(heroe => this.heroe = heroe)
      }
    
    });
                   
}

  ngOnInit() {
  }
  guardar(){
      const heroeClass = new Heroe();
      heroeClass.Nombre = this.heroe.Nombre;
      heroeClass.Casa = this.heroe.Casa;
      heroeClass.Bio = this.heroe.Bio;

      if(this.id =="nuevo"){
        this._heroesService.nuevoHeroe(heroeClass)
        .subscribe(data =>{
            this.router.navigate(['/heroe',data.name]); // data.name es el id que viene desde firebase
        },
        error => console.error(error));

      }else{
        this._heroesService.ActualizaHeroe(heroeClass,this.id)
        .subscribe(data =>{
            this.router.navigate(['/heroe',data.name]); // data.name es el id que viene desde firebase
        },
        error => console.error(error));
      } 
}   
agregarNuevo(forma:NgForm){
  this.router.navigate(['/heroe','nuevo']);
  
  forma.reset({
    Casa:"Marvel"
  });
    
}
    

}
