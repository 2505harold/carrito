import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/global';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class MarcaService {
  constructor(private http: HttpClient) {}

  crear(marca: string) {
    const url = `${URL_SERVICIOS}/marca`;
    return this.http.post(url, { marca });
  }

  eliminar(marca: any) {
    const url = `${URL_SERVICIOS}/marca/${marca.idmarca}`;
    return this.http.delete(url);
  }

  actualizar(marca: string, idmarca: Int16Array) {
    const url = `${URL_SERVICIOS}/marca/${idmarca}`;
    return this.http.put(url, { marca });
  }

  obtener() {
    const url = `${URL_SERVICIOS}/marca`;
    return this.http.get(url).pipe(
      map((resp: any) => {
        return resp.datos;
      })
    );
  }
}
