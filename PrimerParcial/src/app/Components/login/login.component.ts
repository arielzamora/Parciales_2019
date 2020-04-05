import { Router } from '@angular/router';
import { AuthService } from './../../Services/auth.service';
import { ClienteService } from './../../Services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {User}from '../../Model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public error: boolean;
  public errorMessage: string;
  public redirectUrl: string;

  constructor(private fb: FormBuilder,private clienteService:ClienteService, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      name: ['', Validators.required],
      pass: ['', Validators.required],
      perfil: ['Cliente', Validators.required]
    });
  }

  ngOnInit() {
    this.router.navigate(['/']);
  }

  CargarDefault(tipo: string) {
    let dataLogin: Object = null;
    switch (tipo) {
      case 'F':
        dataLogin = {
          user: 'profesor@gmail.com',
          pass: '123456',
          name: 'Octavio',
          perfil: 'Cliente'
        };
        this.form.setValue(dataLogin);
        break;
      case 'N':
        dataLogin = {
          user: 'vendedor@gmail.com',
          pass: '123456',
          name: 'Matias',
          perfil: 'Vendedor'
        };
        this.form.setValue(dataLogin);
        break;
      case 'P':
        dataLogin = {
          user: 'admin@admin.com',
          pass: '123456',
          name: 'ariel',
          perfil: 'Administrador'
        };
        this.form.setValue(dataLogin);
        break;
    }
  }

  public Registrar(): void {
    this.errorMessage = '';
    this.error = false;
    if (this.form.valid) {
      const mail: string = this.form.get('user').value;
      const pass: string = this.form.get('pass').value;
      const name: string = this.form.get('name').value;
      const perfil: string = this.form.get('perfil').value;

      this.authService.register(mail, name, pass, perfil)
        .then(response => {

          this.authService.isAuth().subscribe(user=>{
           
            if(user){
              let usuario: User = {
                mail: mail,
                idUser:user.uid,
                nombre: name,
                clave: pass,
                perfil: perfil,
                sexo:'N/A',
                estado:'Activo'
              };                     
                this.clienteService.Registrar(usuario).then(response=>{
                  if (response) {
                    //guardamos el usuario en el local storage
                    localStorage.setItem('usuario',JSON.stringify(usuario));   
                    
                    if (!this.redirectUrl) {
                      this.redirectUrl = '/';
                    }
                    this.router.navigate(['/Bienvenido']);
                                 
                  }
                }).catch(err=>{
                   this.errorMessage = 'Debe completar los campos correctamente.';
                  });
              }
              
              });
          }
        )
        .catch(
          response => {
            this.error = true;
            this.errorMessage = response.message;
          }
        );
    } else {
      this.errorMessage = 'Debe completar los campos correctamente.';
      this.error = true;
    }
  }

  public Submit(): void {
    this.errorMessage = '';
    this.error = false;
    if (this.form.valid) {
      const mail: string = this.form.get('user').value;
      const pass: string = this.form.get('pass').value;
      const name: string = this.form.get('name').value;
      const perfil: string = this.form.get('perfil').value;

      this.authService.loguear(mail, name, pass, perfil)
        .then(response => {
            if (!this.redirectUrl) {
              this.redirectUrl = '/';
            }
            this.router.navigate(['/Bienvenido']);
          }
        )
        .catch(
          response => {
            this.error = true;
            this.errorMessage = response.message;
          }
        );
    } else {
      this.errorMessage = 'Debe completar los campos correctamente.';
      this.error = true;
    }
  }

}
