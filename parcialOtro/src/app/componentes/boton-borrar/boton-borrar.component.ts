import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton-borrar',
  templateUrl: './boton-borrar.component.html',
  styleUrls: ['./boton-borrar.component.scss']
})
export class BotonBorrarComponent implements OnInit {
  // tslint:disable-next-line: ban-types
  @Input() producto: any;
  @Output() seCreo: EventEmitter<any> = new EventEmitter<any>();

  constructor(public http: HttpClient, public router: Router) { }

  ngOnInit() {

  }

  borrar() {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let body = new HttpParams();
    body = body.set('id', this.producto.id);
    this.http.post("http://localhost/SP/public/usuario/borrar", body, {headers: myheader}).subscribe(() => this.seCreo.emit(true));
}
}
