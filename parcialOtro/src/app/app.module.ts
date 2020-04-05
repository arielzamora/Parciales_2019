import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { BotonBorrarComponent } from './componentes/boton-borrar/boton-borrar.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { AltaProdComponent } from './componentes/alta-prod/alta-prod.component';
import { AltaVentaComponent } from './componentes/alta-venta/alta-venta.component';
import { ListadoVentasComponent } from './componentes/listado-ventas/listado-ventas.component';
import { VentaComponent } from './componentes/venta/venta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BotonBorrarComponent,
    BuscadorComponent,
    AltaProdComponent,
    AltaVentaComponent,
    ListadoVentasComponent,
    VentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
