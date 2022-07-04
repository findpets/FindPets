import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { AuthService } from '../../service/auth.service'; 
import { DataService } from '../../service/data.service';
import { InteracionService } from '../../service/interacion.service'; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

export class MenuComponent implements OnInit {

  login: boolean = false;
  rol: 'visitante' = null;
  uid: string = null;

  constructor(public popoverController: PopoverController,
              private auth: AuthService,
              private interaction: InteracionService,
              private firestore: DataService,
              private router: Router) { 

                    this.auth.stateUser().subscribe(res => {
                      if (res){
                        console.log('esta logeado');
                        this.login=true;
                        this.getDatosUser(res.uid)
                        this.router.navigate(['/home'])
                      }else {
                        console.log('No esta logeado')
                        this.login =false;
                      }
                    })
              }

  ngOnInit() {}



  loginApp() {
      this.login = true;
  }

  logout() {
      this.auth.logout();
      this.interaction.presentToast('Sesión finalizada');
      this.router.navigate(['/login'])

  }

  async getDatosUser(uid: string) {
    const path = 'Usuarios';
    const uiE = await this.auth.getUid();
    this.firestore.getUser().subscribe( res => {
        //console.log('datos -> ', res);
        if (res) {
          //res.find['uid'];
          //console.log('getDatosUser --> ',res);
         
          res.forEach(uiseruid => {
            
            
            if (uiE  == uiseruid.uid ) {
            
              console.log('Si', uiseruid.correo,uiseruid.nombre);

            } 
          });
        }
    })
  }

  async getUid(){
    const uid = await this.auth.getUid();
    if(uid){
      this.uid =uid;
      console.log('uid ->',this.uid);
      return this.uid;  
     }else {
      console.log('No existe Id');
  }
}

}