import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/global';

@Injectable({
  providedIn: 'root',
})
export class SubirImagenService {
  constructor() {}

  subir(archivo: File, tipo: string, id: Int16Array) {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      const xhr = new XMLHttpRequest();
      formData.append('imagen', archivo, archivo.name);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(JSON.parse(xhr.response));
          }
        }
      };

      const url = `${URL_SERVICIOS}/imagen/${tipo}/${id}`;
      xhr.open('PUT', url, true);
      xhr.send(formData);
    });
  }
}
