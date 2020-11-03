import { Routes, RouterModule } from '@angular/router';
import { CarritoComponent } from './carrito.component';
import { MainComponent } from './main/main.component';
import { ComprasComponent } from './compras/compras.component';
import { PagesComponent } from '../pages/pages.component';

const carritoRoutes: Routes = [
  {
    path: '',
    component: CarritoComponent,
    children: [
      { path: 'main', component: MainComponent },
      { path: 'compras', component: ComprasComponent },
    ],
  },
];

export const CARRITO_ROUTES = RouterModule.forChild(carritoRoutes);
