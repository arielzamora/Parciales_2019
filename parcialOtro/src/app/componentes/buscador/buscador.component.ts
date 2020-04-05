import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  encontrado = [];
  desc : string;
  @Output() busqueda: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  buscar(){
    this.traer().subscribe(element => {
      this.encontrado = element.respuesta;
      this.busqueda.emit(this.encontrado);
    });
  }

  traer(): Observable<any> {
    let ruta = 'http://localhost:80/SP/public/usuario/' + this.desc;
    return this.http.get(ruta).pipe(res => res);
  }

}
