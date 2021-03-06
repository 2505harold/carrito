import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/global';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  constructor(private http: HttpClient) {}

  crear(producto: any) {
    console.log(producto);
    const url = `${URL_SERVICIOS}/producto`;
    return this.http.post(url, producto);
  }

  actualizar(producto: any) {
    const url = `${URL_SERVICIOS}/producto`;
    return this.http.put(url, producto);
  }

  obtener() {
    const url = `${URL_SERVICIOS}/producto`;
    return this.http.get(url).pipe(
      map((resp: any) => {
        return resp.datos;
      })
    );
  }

  actualizarImagen(id: Int16Array, file: File) {
    const url = `${URL_SERVICIOS}/productos/${id}`;
    return this.http.put(url, file);
  }
}
