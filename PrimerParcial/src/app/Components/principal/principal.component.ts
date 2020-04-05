import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/Services/cliente.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor(private authService :AuthService,private clienteService:ClienteService) { }

  ngOnInit() {
    //this.getCurrentUser();
  }


  getCurrentUser()
  {

    this.authService.isAuth().subscribe(user=>{
              
      this.clienteService.obtenerUser(user.uid).subscribe(emp=>{

        if(emp.length!=0)
        {   
          localStorage.setItem('usuario',JSON.stringify(emp[0]))
        }else{
        }
    

      })
      
    });    

     
  }

}
