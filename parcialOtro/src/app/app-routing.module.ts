import { HomeComponent } from './componentes/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaProdComponent } from './componentes/alta-prod/alta-prod.component';
import { AltaVentaComponent } from './componentes/alta-venta/alta-venta.component';
import { ListadoVentasComponent } from './componentes/listado-ventas/listado-ventas.component';

const routes: Routes = [
  {
    path: 'productos', component: HomeComponent,
    children:
      [
        { path: 'alta', component: AltaProdComponent}
      ]
  },
  { 
    path: 'ventas', 
    children:
      [
        {path: 'nueva', component: AltaVentaComponent},
        {path: 'listado', component: ListadoVentasComponent}
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
