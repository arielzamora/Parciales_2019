
import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton-borrar',
  templateUrl: './boton-borrar.component.html',
  styleUrls: ['./boton-borrar.component.css']
})
export class BotonBorrarComponent implements OnInit {

  @Output() borra= new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  borrar(id:number)
  {
    this.borra.emit(id);
  }
}
