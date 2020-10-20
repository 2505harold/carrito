import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  usuario: any = [];
  menu = [
    {
      titulo: 'Productos',
      icono: 'shopping_basket',
      url: '/productos',
      submenu: [],
    },
    {
      titulo: 'Empleados',
      icono: 'supervisor_account',
      url: '/empleados',
      submenu: [],
    },
    {
      titulo: 'Pedidos',
      icono: 'touch_app',
      url: '/pedidos',
      submenu: [],
    },
    {
      titulo: 'Mantenimiento',
      icono: 'build',
      url: '/mantenimiento',
      submenu: [],
    },
  ];

  constructor(public _loginService: LoginService) {}

  ngOnInit() {
    const user = localStorage.getItem('usuario');
    this.usuario = JSON.parse(user);
  }
}
