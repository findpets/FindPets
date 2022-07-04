import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdoptamePage } from './adoptame.page';

const routes: Routes = [
  {
    path: '',
    component: AdoptamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdoptamePageRoutingModule {}
