import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {APP_ROUTING} from './app.routes';

// servicios
import { HeroesService } from './services/heroes.service';


import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { KeysPipe } from './pipes/keys.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
    
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
