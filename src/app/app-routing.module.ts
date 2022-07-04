import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './component/registro/registro.component';

import { MenuComponent } from './component/menu/menu.component';
import { PerfilComponent } from './component/perfil/perfil.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => 
    import('./pages/login/login.module').then( m => m.LoginPageModule),
    
  },
  
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
  
  
  },
  {
    path: 'perdidos',
    loadChildren: () => import('./pages/perdidos/perdidos.module').then( m => m.PerdidosPageModule),
  },
  
  {
    path: 'adoptame',
    loadChildren: () => import('./pages/adoptame/adoptame.module').then( m => m.AdoptamePageModule)
  },
  {
    path: 'foto-perdidos',
    loadChildren: () => import('./pages/foto-perdidos/foto-perdidos.module').then( m => m.FotoPerdidosPageModule)
  },
 
  { path: 'perfil', component: PerfilComponent },

  {path : 'registro',component:RegistroComponent},
  
  {path : 'menu',component:MenuComponent},
  
  
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }