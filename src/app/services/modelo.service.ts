import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/global';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ModeloService {
  constructor(private http: HttpClient) {}

  crear(modelo: string, idcategoria: string) {
    const url = `${URL_SERVICIOS}/modelo`;
    return this.http.post(url, { modelo, idcategoria });
  }

  obtener() {
    const url = `${URL_SERVICIOS}/modelo`;
    return this.http.get(url).pipe(
      map((resp: any) => {
        return resp.datos;
      })
    );
  }

  eliminar(modelo: any) {
    const url = `${URL_SERVICIOS}/modelo/${modelo.idmodelo}`;
    return this.http.delete(url);
  }

  obtenerByIdCateg(idcategoria: Int16Array) {
    const url = `${URL_SERVICIOS}/modelo/porIdCateg/${idcategoria}`;
    return this.http.get(url).pipe(
      map((resp: any) => {
        return resp.datos;
      })
    );
  }

  actualizar(modelo: string, idcategoria: Int16Array, idmodelo: string) {
    const url = `${URL_SERVICIOS}/modelo/${idmodelo}`;
    return this.http.put(url, { modelo, idcategoria });
  }
}
