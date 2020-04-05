import { PrincipalComponent } from './../Components/principal/principal.component';
import { LoginComponent } from './../Components/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../Common/auth.guard';
import { NologinGuard } from '../Common/nologin.guard';
import { BienvenidoComponent } from '../Components/bienvenido/bienvenido.component';

import { BusquedaComponent } from '../Components/busqueda/busqueda.component';
import { AltaComponent } from '../Components/peliculas/alta/alta.component';
import { ListadoComponent } from '../Components/peliculas/listado/listado.component';

import { ActorAltaComponent } from '../Components/actor/alta/alta.component';
import { ActorListadoComponent } from '../Components/actor/listado/listado.component';



const routes: Routes = [
  { path: '', redirectTo: 'Bienvenido', pathMatch: 'full' },
  { path: 'Bienvenido', component: BienvenidoComponent,
    canActivate:[AuthGuard] ,data: {animation: 'PrincipalPage'},
    children: [
      { path: '', redirectTo: 'Item1', pathMatch: 'full' },
      {
        path: 'Busqueda', 
        component: BusquedaComponent,
        canActivate:[AuthGuard] ,data: {animation: 'PrincipalPage'}
      },
      {
        path: 'Peliculas', 
        component: ListadoComponent,
        canActivate:[AuthGuard] ,data: {animation: 'PrincipalPage'}
      },
      {
        path: 'Actores', 
        component: ActorListadoComponent,
        canActivate:[AuthGuard] ,data: {animation: 'PrincipalPage'}
      }]
  },
  {
    path: 'Login', component: LoginComponent,canActivate:[NologinGuard] ,data: {animation: 'LoginPage'}
  },

];

/* const routes: Routes = [
  { path: '', redirectTo: 'Principal', pathMatch: 'full' },
  { path: 'Principal', component: PrincipalComponent,
    canActivate: [AuthGuard],

    data: { roles: ['Cliente', 'Vendedor', 'Administrador']},
    children: [
      { path: '', redirectTo: 'Compras', pathMatch: 'full' },
      {
        path: 'Compras',
        component: ServiciosComponent,
        canActivate: [AuthGuard],
        data: { roles: ['Cliente', 'Vendedor', 'Administrador'] }
      },
      {
        path: 'Productos',
        component: ClientesComponent,
        canActivate: [AuthGuard],
        data: { roles: ['Vendedor', 'Administrador'] }
      },
      {
        path: 'Estadisticas',
        component: EstadisticasComponent,
        canActivate: [AuthGuard],
        data: { roles: ['Administrador'] }
      },
    ]
  },
  {
    path: 'Login', component: LoginComponent
  }
];
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [ RouterModule ],
  declarations: [
  ]
})
export class AppRoutingModule { }
