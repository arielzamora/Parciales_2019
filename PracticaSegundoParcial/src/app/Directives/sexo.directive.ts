import { Directive, ElementRef, Renderer, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appSexo]'
})
export class SexoDirective implements OnInit {
  sexo: string;
  @Input() set appSexo(sexo: string) {
    this.sexo = sexo;
  }

  constructor(public el: ElementRef<any>,public rederer: Renderer) { }

  ngOnInit(): void {
    if (this.sexo === 'Hombre') {
      this.rederer.setElementStyle(this.el.nativeElement, 'background-color', 'Pink');
      this.rederer.setElementStyle(this.el.nativeElement, 'font-family', 'Verdana');
    } else if (this.sexo === "Mujer") {
      this.rederer.setElementStyle(this.el.nativeElement, 'background-color', 'LightBlue');
      this.rederer.setElementStyle(this.el.nativeElement, 'font-family', 'Impact');
    }
    else{
      this.rederer.setElementStyle(this.el.nativeElement, 'background-color', 'violet');
      this.rederer.setElementStyle(this.el.nativeElement, 'font-family', 'Lucida Sans');
    }
  }

}
