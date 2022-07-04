import { Pipe, PipeTransform } from '@angular/core';
import { Perdidos } from '../service/data.service';
@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {

  transform(perdidos: Perdidos[], text: string):Perdidos[]{
 
    if (text.length===0){return perdidos;}

    text = text.toLocaleLowerCase();

    return perdidos.filter(buscar =>{
    return buscar.nameM.toLocaleLowerCase().includes(text) || buscar.color.toLocaleLowerCase().includes(text)|| buscar.direccion.toLocaleLowerCase().includes(text)
});



  }

  
}
