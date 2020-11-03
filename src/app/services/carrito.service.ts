import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private http: HttpClient) { }

  crear(carrito:any) {
    const url = `${URL_SERVICIOS}/carrito`;
    return this.http.post(url, { carrito });
  }

  obtener() {
    const url = `${URL_SERVICIOS}/carrito/${localStorage.getItem('userCarrito')}`;
    return this.http.get(url).pipe(
      map((resp: any) => {
        return resp.datos;
      })
    );
  }

  actualizar(cantidad,total, id) {
    const url = `${URL_SERVICIOS}/carrito/${id}`;
    return this.http.put(url, {car_cantidad:cantidad,car_total:total}).pipe(
      map((resp: any) => {
        return resp.datos;
      })
    );
  }

}
