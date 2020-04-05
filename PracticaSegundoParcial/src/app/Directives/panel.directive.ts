import { Directive, ElementRef, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[appPanel]'
})
export class PanelDirective implements OnInit {

  constructor(
    public el: ElementRef,
    public rederer: Renderer
  ) { }

  ngOnInit() {
    this.rederer.setElementClass(this.el.nativeElement, 'shadow', true);
    this.rederer.setElementClass(this.el.nativeElement, 'p-3', true);
    this.rederer.setElementClass(this.el.nativeElement, 'mb-5', true);
    //this.rederer.setElementClass(this.el.nativeElement, 'bg-white', true);
    this.rederer.setElementClass(this.el.nativeElement, 'rounded', true);
  }
}
