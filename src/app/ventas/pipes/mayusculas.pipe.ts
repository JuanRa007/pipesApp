import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'mayusculas'          // Nombre del PIPE
})

export class MayusculasPipe implements PipeTransform {

  transform(valor: string, enMayusculas: boolean = true): string {
    /* console.log(valor); */
    /* 
    if (enMayusculas) {
      return valor.toUpperCase();
    } else {
      return valor.toLocaleLowerCase();
    }
    */
    // Otra forma.
    return (enMayusculas) ? valor.toUpperCase() : valor.toLocaleLowerCase();


  }
}