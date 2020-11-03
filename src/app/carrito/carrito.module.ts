import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes
import { MainComponent } from './main/main.component';
import { ComprasComponent } from './compras/compras.component';
import { CarritoComponent } from './carrito.component';
//Rutas
import { CARRITO_ROUTES } from './carrito.routes';
//Modulos
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [MainComponent, ComprasComponent, CarritoComponent],
  imports: [CommonModule, CARRITO_ROUTES, SharedModule, PipesModule, MaterialModule],
})
export class CarritoModule {}
