import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/global';

@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {
  transform(img: string, tipo: string): string {
    const url = `${URL_SERVICIOS}/imagen/${tipo}/${img}`;
    return url;
  }
}
