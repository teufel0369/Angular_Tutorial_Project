import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'convertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform {
  transform(val: string, char: string): string {
    return val.replace(char, ' ');
  }
}
