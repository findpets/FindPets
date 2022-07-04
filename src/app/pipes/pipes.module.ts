import { NgModule } from '@angular/core';
import { BuscarPipe } from './buscar.pipe';



@NgModule({
  declarations: [BuscarPipe],
  exports:[BuscarPipe],
  imports: [  ]
})
export class PipesModule { }
