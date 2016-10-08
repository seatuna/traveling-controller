import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'newLine'})
export class NewLinePipe implements PipeTransform {
  transform(value: Array<any>) {
    if (value) {
      return value.join('\n');
    } else {
      return;
    }
  }
}
