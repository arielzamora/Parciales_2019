import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/Services/pelicula.service';
import { Peliculas } from 'src/app/Model/Peliculas';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  pelicula;
  altaP=false;
  altaA=false;
  constructor(public peliculaService:PeliculaService) { }

  ngOnInit() {
  }

  quitar(pelicula:Peliculas)
  {
     this.pelicula=this.peliculaService.Baja(pelicula);
  }

}
