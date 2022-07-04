import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { getDownloadURL, ref, Storage, uploadString } from '@angular/fire/storage';
import { Photo } from '@capacitor/camera'; 
import { Perdidos } from './data.service';
import { Filesystem, Directory } from '@capacitor/filesystem';



@Injectable({
  providedIn: 'root'
})
export class AvatarService {
  //Perdidos : any;
  img : any ;
  

  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private storage: Storage
  ) { }


getUserProfile(){
  const user= this.auth.currentUser;
  const userDocRef = doc(this.firestore, `imgUrl/${user.uid}`);
  //this.img = doc(this.firestore, `${this.storage}`);
  //console.log('Aqui la Imagen ----->',this.img);
  
  return docData(userDocRef);
}
//const path= `uploads/${user.uid}/profile.png`;
async uploadImage(cameraFile: Photo){
  const user= this.auth.currentUser;
  const path= `uploads/${Date.now()}.${user.uid}.png`;
  const storageRef = ref(this.storage, path);
 
  try {
    await uploadString (storageRef, cameraFile.base64String,'base64'); //convertir img en string
    const imageUrl = await getDownloadURL(storageRef); // almacenar en firebase

    const userDocRef = doc(this.firestore, `imgUrl/${user.uid}`);
    

     //this.Perdidos.imgUrl =  imageUrl ;

    console.log('desde AvatarService -->>',imageUrl);
    await setDoc(userDocRef, {
      imageUrl
    });
    return true;
  } catch (e) {
    return null;
  }
}

}