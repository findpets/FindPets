import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AngularFireAuth, } from '@angular/fire/compat/auth';
import { Adoptame, UserI } from './data.service';




@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private authfirebase: AngularFireAuth) { }

  login(correo, password) {
    return  this.authfirebase.signInWithEmailAndPassword(correo, password)
  }

  logout() {
    this.authfirebase.signOut();
  }

  registarUser(datos : UserI){
    return this.authfirebase.createUserWithEmailAndPassword(datos.correo,datos.password);
 }

 
  stateUser(){
    return this.authfirebase.authState
  }

  async getUid(){
   const user = await this.authfirebase.currentUser;
   if(user){
   return user.uid;
   }else{
     return null;
   }
  }

  
    
    }