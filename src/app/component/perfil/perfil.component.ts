import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/service/auth.service';
import { DataService, UserI } from 'src/app/service/data.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {

uid: string = null;
info : UserI= null;
listaUsuarios = [];



  constructor(private authService : AuthService,
              private firestore: DataService,
              ) { }

  async ngOnInit() {

   console.log('Estoy en perfil');
   this.getUid();
   this.authService.stateUser().subscribe(res =>{
      console.log('En perfil - estado de autenticacion',res);
      this.getUid();
      this.getDatosUser(this.uid);
   });
   /*this.firestore.getAll('Usuarios').then(firebaseResponse => {
    firebaseResponse.subscribe(listaDeUsuariosRef => {

      this.listaUsuarios = listaDeUsuariosRef.map(usuarioRef => {
        let usuario = usuarioRef.payload.doc.data();
        usuario['id'] = usuarioRef.payload.doc.id;
        return usuario;
      })
      console.log(this.listaUsuarios);

    })
  })*/
  }

 async getUid(){
    const uid = await this.authService.getUid();
    if(uid){
      this.uid =uid;
      console.log('uid ->',this.uid);
      this.getDatosUser(uid);   
     }else {
      console.log('No existe Id');
  }
}



getInfoUser() {
  const path = 'Usuarios';
  const id = this.uid;
  this.firestore.getUser().subscribe( res => {
      if (res) {
        this.listaUsuarios = res;
      }
     // console.log('datos son -> ', res);
      
  })
}

obtenerPorId(id) {

  this.firestore.getById('Usuarios', id).then(res => {
    res.subscribe(docRef => {
      let usuario = docRef.data();
      usuario['id'] = docRef.id;
      console.log(usuario)
    })
  })
}


async getDatosUser(uid: string) {
  const path = 'Usuarios';
  const uiE = await this.authService.getUid();
  this.firestore.getUser().subscribe( res => {
      if (res) {

        console.log('getDatosUser --> ',res);
        res.forEach(uiseruid => {  

          if (uiE  == uiseruid.uid ) { 
            this.info = uiseruid;
            console.log('Si', uiseruid.correo,uiseruid.nombre,uiseruid.edad);
              return uiseruid.correo,uiseruid.nombre,uiseruid.edad;
             
          } 
        });
      }
  })
}

}
