import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PagesComponent } from './pages/pages.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'carrito', pathMatch: 'full' },
  { path: 'carrito', component: CarritoComponent },
  { path: 'console', component: PagesComponent },
  { path: 'login', component: LoginComponent },
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
