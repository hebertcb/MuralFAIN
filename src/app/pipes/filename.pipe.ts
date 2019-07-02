import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filename'
})
export class FilenamePipe implements PipeTransform {

  transform(url: string): any {
    return url.split('/').pop().split('?').shift();
  }

}
