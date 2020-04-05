
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeliculaService } from 'src/app/Services/pelicula.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  encontrado = [];
  desc : string;
 /*  @Output() busqueda: EventEmitter<any> = new EventEmitter<any>(); */
  
  constructor(private peliculaService:PeliculaService) { }

  ngOnInit() {
  }

  buscar(){
    this.peliculaService.obtenerPeliculas(this.desc).subscribe(element => {
      this.encontrado = element;
      /* this.busqueda.emit(this.encontrado); */
    });
  }

}
