import { Component} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DataService, UserI } from '../../service/data.service';
import { NavigationExtras, Router} from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { geteuid } from 'process';
import { getAdditionalUserInfo } from 'firebase/auth';
import { collection } from 'firebase/firestore';
import { user } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import {getDatabase, ref, onValue, child, get} from 'firebase/database'
import { getAuth } from "firebase/auth";



@Component({
  selector: 'app-adoptame',
  templateUrl: './adoptame.page.html',
  styleUrls: ['./adoptame.page.scss'],
})
export class AdoptamePage {

  users = [];
  
  
  mascSlideOpts={

    slidesPerView:1,
    slidesOffsetbefore:11,
    spaceBetween:10,
    loop:true
  }

  constructor(
    private firestore : DataService ,
    private router: Router,
    private authService: AuthService,
    private alertController:AlertController,
    private emailComposer :EmailComposer, 
  ) 
               
  {
    this.firestore.getAdop().subscribe(adopt => {
      console.log(adopt);
      this.users = adopt;
    })
   }

  
  openNote(note){
  }

  volver(){
    let navigationExtras: NavigationExtras={
    
    }
    this.router.navigate(['../home'], navigationExtras);
  }

  async logout(){
    await this.authService.logout();
    this.router.navigateByUrl('/', {replaceUrl:true});}

async addUser(){
  const alert = await this.alertController.create({
    header :'Formulario de Adopción',
    inputs: [
      {
        name : 'nameC',
        placeholder: 'Nombre Completo',
        type:'text'
      },
      {
        name : 'rut',
        placeholder: 'Rut',
        type:'text'
      },
      {
        name : 'direccion',
        placeholder: 'Dirección',
        type:'text'
      },
      {
        name : 'tipocasa',
        placeholder: '¿Casa propia o arrendada?',
      },
      {
        name : 'permiso',
        placeholder: 'En caso de arriendo, ¿Tiene permiso SÍ/NO? ',
        type:'text'
      },
  
      {
        name : 'telefono',
        placeholder: 'Número de Contacto',
        type:'text'
      },
      {
        name : 'mascota',
        placeholder: 'Nombre mascota que desea adoptar',
        type:'text'
      }
    ],
    buttons:[
      {
        text : 'Cancelar',
        role : 'cancel'
      },
      {
        text: 'Agregar',
        handler: (adopt) => {
          this.firestore.addUser({nameC: adopt.nameC , rut : adopt.rut ,  direccion:adopt.direccion, tipocasa: adopt.tipocasa,permiso: adopt.permiso, telefono:adopt.telefono, mascota : adopt.mascota })
            this.enviarCorreo();
        }
      }
    ]
  });
  await alert.present();
 
}

async confirmar(){
 
    const alert = await this.alertController.create({
    message: '¡Gracias! Tu solicitud ha sido enviada',
    buttons: [{
      text: 'Aceptar'       
    }]
  });
  await alert.present();
}

option ={
  slidesPerView: 1.5,
  centeredSlides: true,
  loop: true,
  spaceBetween: 10,
  autoplay: true, 

}


enviarCorreo(){
  
  

  var feedback = document.createElement('a');
  feedback.setAttribute('href',
  'mailto:findpets.fundacion@gmail.com?subject=Solicitud%20de%20Adopción&body=Hola%20estoy%20interesado%20en%20adoptar%20a:' 
  ); 
  
  feedback.click();
  this.confirmar(); 
  console.log('mail enviado');
} 



}