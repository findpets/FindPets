import { Component } from '@angular/core';

import { AnimationController } from '@ionic/angular';

import { DataService } from 'src/app/service/data.service';





@Component({
  selector: 'app-foto-perdidos',
  templateUrl: './foto-perdidos.page.html',
  styleUrls: ['./foto-perdidos.page.scss'],
})

export class FotoPerdidosPage  {

  perdidos = [];
  imagenLink : string = '';
  inputFired =false;

  textoBuscar='';

  constructor(
    private dataService : DataService ,
    private animationCtrl: AnimationController,
  )  
  {
      this.dataService.getFind().subscribe(res => {
      console.log(res);
      this.perdidos = res;
    })
  }



toggleSearch(event){
  const text = event.target.value;
  this.textoBuscar = text;

  if(this.inputFired){
    return;
  }
 
  this.inputFired=true;

}

  


}
