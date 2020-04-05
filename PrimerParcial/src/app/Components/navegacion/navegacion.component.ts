import { Router } from '@angular/router';
import { AuthService } from './../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/User';
import { ClienteService } from 'src/app/Services/cliente.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent implements OnInit {

  public nombre: string;
  public perfil: string;
  user: User;


  constructor(private authService: AuthService,private clienteService:ClienteService, private router: Router) {
   
    //this.getCurrentUser(); 
  }

  ngOnInit() {
  }

  getCurrentUser()
  {
     
    this.authService.isAuth().subscribe(us=>{
              
      this.clienteService.obtenerUser(us.uid).subscribe(emp=>{
  
        if(emp.length!=0)
        {   
          localStorage.setItem('usuario',JSON.stringify(emp[0]))
  
        }else{
  
        }
      })
      
    }); 
            const data = localStorage.getItem('usuario');
  
            if(data)
            {
              this.user=JSON.parse(data);
        
              this.nombre = this.user.nombre;
              this.perfil = this.user.perfil;
            }

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/Login']); 
  }

}
