import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extension'
})
export class ExtensionPipe implements PipeTransform {

  transform(url: string): any {
    return url.split('.').pop();
  }

}
