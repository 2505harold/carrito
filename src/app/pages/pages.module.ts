import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes
import { PagesComponent } from './pages.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProductosComponent } from './productos/productos.component';

//Rutas
import { PAGES_ROUTES } from './pages.routes';

//Modules
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';

@NgModule({
  declarations: [
    PagesComponent,
    PedidosComponent,
    ProductosComponent,
    EmpleadosComponent,
    MantenimientoComponent,
  ],
  imports: [CommonModule, PAGES_ROUTES, SharedModule, MaterialModule],
})
export class PagesModule {}
