import { Directive, Input, ElementRef, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { User } from '../Model/User';

@Directive({
  selector: '[appValidarRoles]'
})
export class ValidarRolesDirective implements OnInit {

  private rolesAdmitidos: string[];

  @Input() set appValidarRoles(value: string[]) {
    this.rolesAdmitidos = value;//input de los roles admitidos
  }

  constructor(
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
  }

  ngOnInit() {

    if (this.CheckRoles()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  private CheckRoles(): Boolean {
    let retorno: Boolean = false;
    const data = localStorage.getItem('usuario');  
    let perfil:string;
    let user:any;
    if(data)
    {
      user=JSON.parse(data);

      perfil = user.perfil;
    }

    if (this.rolesAdmitidos && data) {
      const tipoUsuario = perfil;
      this.rolesAdmitidos.forEach(element => {
        if (tipoUsuario === element) {
          retorno = true;
        }
      });
    }

    return retorno;
  }

}
