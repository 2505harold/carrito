import { Routes, RouterModule } from '@angular/router';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProductosComponent } from './productos/productos.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { PagesComponent } from './pages.component';
import { LoginGuard } from '../services/guards/login.guard';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [LoginGuard],
    children: [
      { path: 'pedidos', component: PedidosComponent },
      { path: 'productos', component: ProductosComponent },
      { path: 'empleados', component: EmpleadosComponent },
      { path: 'mantenimiento', component: MantenimientoComponent },
    ],
  },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
