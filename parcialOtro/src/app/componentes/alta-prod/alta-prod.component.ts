import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { delay } from 'q';

@Component({
  selector: 'app-alta-prod',
  templateUrl: './alta-prod.component.html',
  styleUrls: ['./alta-prod.component.scss']
})
export class AltaProdComponent implements OnInit {

  nombre: string;
  precio: number;
  fecha: Date;
  tipo: string;
  @Output() alta: EventEmitter<any> = new EventEmitter<any>();

  constructor(public http: HttpClient, public router: Router) { }

  ngOnInit() {
  }

  agregar() {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let body = new HttpParams();
    body = body.set('descripcion', this.nombre);
    body = body.set('precio', this.precio.toString());
    body = body.set('fechaDeVencimiento', this.fecha.toString());
    body = body.set('tipo', this.tipo);
    this.http.post("http://localhost/SP/public/usuario/", body, {headers: myheader}).subscribe(async () => {
      this.router.navigate(['/productos']);  
    });

  }
}
