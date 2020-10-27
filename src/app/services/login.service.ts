import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/global';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  usuario: any = [];
  

  constructor(public http: HttpClient, public router: Router) {
    this.leerStorage();
  }

  login(email: string, password: string) {
    const url = `${URL_SERVICIOS}/login`;
    return this.http.post(url, { email, password }).pipe(
      map((resp: any) => {
        this.guardarStorage(resp.usuario);
      })
    );
  }

  logout() {
    localStorage.removeItem('usuario');
    this.usuario = [];
    this.router.navigate(['/login']);
  }

  leerStorage() {
    if (localStorage.getItem('usuario')) {
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.usuario = [];
    }
  }

  estaLogeado() {
    return this.usuario.ur_nombre ? true : false;
  }

  guardarStorage(user: any) {
    localStorage.setItem('usuario', JSON.stringify(user));
    this.usuario = user;
  }
}
