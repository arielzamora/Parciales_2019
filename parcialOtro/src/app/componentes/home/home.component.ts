import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public productos = [];
  constructor(public http: HttpClient) { }

  nuevoPord($event)
  {
    if($event)
    {
      this.traer().subscribe(element => {
        this.productos = element.respuesta;
      });
    }
    else
    {
      console.log('Error al cargar');
    }
  }

  hacerAlgo($event)
  {
    if($event)
    {
      this.traer().subscribe(element => {
        this.productos = element.respuesta;
      });
    }
    else
    {
      console.log('Error al borrar');
    }
  }

  buscar($event)
  {
    this.productos = $event;
  }
  
  ngOnInit() {
    this.traer().subscribe(element => {
      this.productos = element.respuesta;
    });
  }

  traer(): Observable<any> {
    return this.http.get('http://localhost:80/SP/public/usuario/traer/').pipe(res => res);
  }
}
