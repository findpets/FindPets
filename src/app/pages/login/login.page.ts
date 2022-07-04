import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { InteracionService } from '../../service/interacion.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credenciales = {
    correo : null,
    password : null
  }

  constructor(private auth:AuthService,
    private interacion : InteracionService,
    private router : Router ) { }




  ngOnInit() {}

  async login(){
    await this.interacion.presentLoading('Ingresando...')
   console.log('credenciales ->',this.credenciales); 
    const res = await this.auth.login(this.credenciales.correo,this.credenciales.password).catch(error => {
      console.log('error');
      this.interacion.closeLoading();
      this.interacion.presentToast('Usuario o Contraseña Inválido')
    })
    if (res){
      console.log('res ->',res);
      this.interacion.closeLoading();
      this.interacion.presentToast('Ingresado Con éxito');
      this.router.navigateByUrl('/home',{replaceUrl:true})
    }
  }
  
  
  
  }