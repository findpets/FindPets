import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerdidosPageRoutingModule } from './perdidos-routing.module';

import { PerdidosPage } from './perdidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerdidosPageRoutingModule
  ],
  declarations: [PerdidosPage]
})
export class PerdidosPageModule {}
