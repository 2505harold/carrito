import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ModalModeloComponent } from './components/modal-modelo/modal-modelo.component';

//Modulos
import { PagesModule } from './pages/pages.module';
import { CarritoModule } from './carrito/carrito.module';
import { MaterialModule } from './material/material.module';
import { ServicesModule } from './services/services.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Routes
import { APP_ROUTES } from './app.routes';
import { CarritoComponent } from './carrito/carrito.component';

@NgModule({
  declarations: [AppComponent, ModalModeloComponent, LoginComponent],
  imports: [
    BrowserModule,
    PagesModule,
    CarritoModule,
    BrowserAnimationsModule,
    APP_ROUTES,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ServicesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
