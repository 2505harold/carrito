import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/global';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  constructor(private http: HttpClient) {}

  crear(categoria: string) {
    const url = `${URL_SERVICIOS}/categoria`;
    return this.http.post(url, { categoria });
  }

  obtener() {
    const url = `${URL_SERVICIOS}/categoria`;
    return this.http.get(url).pipe(
      map((resp: any) => {
        return resp.datos;
      })
    );
  }

  actualizar(categoria: string, idcategoria: Int16Array) {
    const url = `${URL_SERVICIOS}/categoria/${idcategoria}`;
    return this.http.put(url, { categoria });
  }
}
