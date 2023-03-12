import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[]): Heroe[] {

    // Ver explicación en: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // El "sort" recibe dos valores del array y si devuelvo valor '1' los intercambia (ordena); si devuelvo valor "-1" no hace nada.
    heroes = heroes.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);

    return heroes;
  }

}
