import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service'; 
import { DataService, UserI } from 'src/app/service/data.service'; 
import { InteracionService } from 'src/app/service/interacion.service'; 




@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})

export class RegistroComponent implements OnInit {
  
  datos :UserI = {
    nombre: null,
    edad: null,
    correo: null,
    uid: null,
    password: null,
    perfil: 'visitante'
  }

  constructor(private auth: AuthService,
              private firestore: DataService,
              private interaction: InteracionService,
              private router: Router) { }

  ngOnInit() {}

  async registrar() {
    this.interaction.presentLoading('Registrando...')
    console.log('datos -> ', this.datos);
    const res = await this.auth.registarUser(this.datos).catch( error => {
      this.interaction.closeLoading();
      this.interaction.presentToast('error')
      console.log('error');
    })
    if (res) {
      console.log('Éxito al crear el usuario');
      const path = 'Usuarios';
      const id = res.user.uid;
      this.datos.uid = id;
      this.datos.password = null
      await this.firestore.addUserr(this.datos)
      this.interaction.closeLoading();
      this.interaction.presentToast('Registrado con Éxito');
      this.router.navigate(['/home'])
  }

}

  
  
   
}