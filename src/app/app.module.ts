import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/compat/auth-guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { RegistroComponent } from './component/registro/registro.component';
import { MenuComponent } from './component/menu/menu.component';
import { PerfilComponent } from './component/perfil/perfil.component';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';

import { NativeGeocoder } from '@awesome-cordova-plugins/native-geocoder/ngx';
import { Geolocation} from '@awesome-cordova-plugins/geolocation/ngx';
import { GoogleMaps } from '@ionic-native/google-maps';

import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

@NgModule({
  declarations: [AppComponent,RegistroComponent,MenuComponent ,PerfilComponent],
  entryComponents: [],
  
  imports: [
  
    BrowserModule, 
    CommonModule,
    AngularFirestoreModule,
    IonicModule.forRoot(),
     AppRoutingModule,
     FormsModule,
     AngularFireModule.initializeApp(environment.firebaseConfig),
     AngularFireAuthModule,
     AngularFireAuthGuardModule,
     ReactiveFormsModule,
     
      provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
      provideFirestore(() => getFirestore()),
      provideAuth(() => getAuth()),
      provideStorage(() => getStorage())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, },ScreenTrackingService,
    UserTrackingService,
    StatusBar,
    Geolocation,
    NativeGeocoder,
    GoogleMaps,
    EmailComposer,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

