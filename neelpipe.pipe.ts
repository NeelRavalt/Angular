import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'neelpipe'
})
export class NeelpipePipe implements PipeTransform {

  transform(value: string, name: string): string {
    if (name.toLowerCase() == 'neel')
      return 'hi'+' ' + value;
    else
      return 'hello'+' ' + value;
  }

}
