import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes
import { PagesComponent } from './pages.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProductosComponent } from './productos/productos.component';
import { PerfilComponent } from './perfil/perfil.component';

//Rutas
import { PAGES_ROUTES } from './pages.routes';

//Modules
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { PipesModule } from '../pipes/pipes.module';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PagesComponent,
    PedidosComponent,
    ProductosComponent,
    EmpleadosComponent,
    MantenimientoComponent,
    PerfilComponent,
  ],
  imports: [
    CommonModule,
    PAGES_ROUTES,
    SharedModule,
    PipesModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PagesModule {}
