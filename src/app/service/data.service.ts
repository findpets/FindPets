import { Injectable } from '@angular/core';
import { collectionData, docData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { AngularFirestore, } from '@angular/fire/compat/firestore';



export interface Perdidos{
  id?: string;
  nameM : string;
  tipoM : string;
  color: string;
  tamano: string;
  direccion: any;
  fecha: string;
  imagenLink : string ;
}


export interface Adoptame
 {
   id?: string;
   nameC : string ;
   rut : string;
  
   direccion: string;
   tipocasa: string;
   permiso: string;

   telefono: string;
   mascota : string;
 }

 export interface UserI {
  
  nombre: string;
  edad: number;
  correo: string;
  uid: string;
  password: string;
  perfil: 'visitante'
}


@Injectable({
  providedIn: 'root'
})


export class DataService {
  
  constructor( private fireStore : AngularFirestore,
               private fireservice :Firestore,
               
                ) { }

 //TODO ESTO PARA AGREGAR USUARIO DE FORMULARIO  

 addUserr(datos: UserI){
  const notesRef = collection(this.fireservice, 'Usuarios');
  return addDoc(notesRef, datos)}

addFind(find:Perdidos){
    const findRef = collection(this.fireservice,'perdidos');
    return addDoc(findRef,find)
    }

addUser(adop: Adoptame){
      const notesRef = collection(this.fireservice, 'users');
      return addDoc(notesRef, adop)}
    



 getAdop(): Observable<Adoptame[]>{
  const usuaRef = collection(this.fireservice,'users');
  return collectionData(usuaRef,{idField:'id'}) as Observable<Adoptame[]> ;
}
getFind(): Observable<Perdidos[]>{
  const findRef = collection(this.fireservice,'perdidos');
  return collectionData(findRef,{idField:'id'}) as Observable<Perdidos[]> ;
  }


getUser(): Observable<UserI[]>{
    const notesRef = collection(this.fireservice, 'Usuarios');
    return collectionData(notesRef, {idField: 'id'}) as Observable<UserI[]>;
  }


// Aqui TODO PARA AGREGAR PERDIDOS

async getAll(collection) {
  try {
    return await this.fireStore.collection(collection).snapshotChanges();
  } catch (error) {
    console.log("error en: getAll ", error)
  }
}

// no tocar aqui 
getId() {
  return this.fireStore.createId();
}

async getById(collection,id){
  try{
    return await this.fireStore.collection(collection).doc(id).get();
  }catch(error){
    console.log('error en getby',error)
   }
  }


  async create(collection, dato) {
    try {
      return await this.fireStore.collection(collection).add(dato);
    } catch (error) {
      console.log("error en: create ", error)
    }
  }
  

}

