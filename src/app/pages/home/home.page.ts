import { Component} from '@angular/core';
import { NavigationExtras, Router} from '@angular/router';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  constructor(
    private router: Router,
    private authService: AuthService,
 ) 
 { }

 

  async logout(){
    await this.authService.logout();
    this.router.navigateByUrl('/', {replaceUrl:true});}


  adoptar(){
    let navigationExtras: NavigationExtras={
     }
  this.router.navigate(['/adoptame'], navigationExtras);
}



  perdido(){
    let navigationExtras: NavigationExtras={
    
    }
    this.router.navigate(['/perdidos'], navigationExtras);
  }
  
  perfil(){
    let navigationExtras: NavigationExtras={
    
    }
    this.router.navigate(['../perfil'], navigationExtras);
  }
}



