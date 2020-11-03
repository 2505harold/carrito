import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private http: HttpClient) {}

  categorias() {
    const url = `${URL_SERVICIOS}/categoria`;
    return this.http.get(url).pipe(
      map((resp: any) => {
        return resp.datos;
      })
    );
  }
  modelos() {
    const url = `${URL_SERVICIOS}/modelo`;
    return this.http.get(url).pipe(
      map((resp: any) => {
        return resp.datos;
      })
    );
  }
  marcas() {
    const url = `${URL_SERVICIOS}/marca`;
    return this.http.get(url).pipe(
      map((resp: any) => {
        return resp.datos;
      })
    );
  }

  productos() {
    const url = `${URL_SERVICIOS}/producto`;
    return this.http.get(url).pipe(
      map((resp: any) => {
        return resp.datos;
      })
    );
  }

  productosPorValor(tipo:string, valor:string) {
    const url = `${URL_SERVICIOS}/producto/${tipo}/${valor}`;
    return this.http.get(url).pipe(
      map((resp: any) => {
        return resp.datos;
      })
    );
  }

  
}
