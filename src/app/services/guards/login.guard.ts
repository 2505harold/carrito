import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(public _loginService: LoginService, public router: Router) {}
  canActivate() {
    if (this._loginService.estaLogeado()) {
      console.log('esta logeado');
      return true;
    } else {
      this.router.navigate(['/login']);
      console.log('no esta logeado');
      return false;
    }
  }
}
