import { ClienteService } from './Services/cliente.service';
import { AppRoutingModule } from './Routes/app-routing.module';
import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';
import { HttpBase } from './Services/http-base.service';
import { SpinnerInterceptor } from './Services/Interceptors/SpinnerInterceptor';
import { ErrorInterceptor } from './Services/Interceptors/ErrorInterceptor';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule }from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavegacionComponent } from './Components/navegacion/navegacion.component';
import { PrincipalComponent } from './Components/principal/principal.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { EspacioPipe } from './Pipes/espacio.pipe';
import { DateFirePipe } from './Pipes/dateFire.pipe';
import { SexoDirective } from './Directives/sexo.directive';
import { AumentoPipe } from './Pipes/aumento.pipe';


//angular fire 
//import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
//import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

//firestore y imagenes 
import {AngularFireModule}from '@angular/fire';
import {AngularFireDatabaseModule}from '@angular/fire/database';
import {AngularFireAuth}from '@angular/fire/auth';
import {AngularFireStorageModule}from '@angular/fire/storage';
import {AngularFirestore}from '@angular/fire/firestore';
import {FormsModule}from '@angular/forms';

import { firebaseConfig } from 'src/environments/environment';
import { BienvenidoComponent } from './Components/bienvenido/bienvenido.component';


import { BusquedaComponent } from './Components/busqueda/busqueda.component';
import { AltaComponent } from './Components/peliculas/alta/alta.component';
import { ListadoComponent } from './Components/peliculas/listado/listado.component';
import { ActorAltaComponent } from './Components/actor/alta/alta.component';
import { ActorListadoComponent } from './Components/actor/listado/listado.component';
import { BotonBorrarComponent } from './Components/boton-borrar/boton-borrar.component';
import { DetallePeliculaComponent } from './Components/detalle-pelicula/detalle-pelicula.component';




export function getAccessToken() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavegacionComponent,
    PrincipalComponent,
    EspacioPipe,
    SexoDirective,   
    AumentoPipe,
    DateFirePipe,
    BienvenidoComponent,
    BusquedaComponent,
    AltaComponent,
    ListadoComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    BotonBorrarComponent,
    DetallePeliculaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    HttpClientModule,
    NgxCaptchaModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),  
  ],
  providers: [
    HttpBase,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    NgxSpinnerService,
    //agrego los services,
    AngularFireAuth,//
    AngularFirestore//
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
