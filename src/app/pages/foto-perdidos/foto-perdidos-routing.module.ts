import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FotoPerdidosPage } from './foto-perdidos.page';

const routes: Routes = [
  {
    path: '',
    component: FotoPerdidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FotoPerdidosPageRoutingModule {}
