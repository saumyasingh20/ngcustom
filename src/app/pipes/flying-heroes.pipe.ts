import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../model/Heroes';

@Pipe({
  name: 'flyingHeroes'
})
export class FlyingHeroesPipe implements PipeTransform {

  transform(allHeroes:Hero[]) {
    return allHeroes.filter(hero => hero.canFly);
  }

}
