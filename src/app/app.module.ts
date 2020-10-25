import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

//Modulos
import { PagesModule } from './pages/pages.module';
import { MaterialModule } from './material/material.module';
import { ServicesModule } from './services/services.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Routes
import { APP_ROUTES } from './app.routes';
import { ModalModeloComponent } from './components/modal-modelo/modal-modelo.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, ModalModeloComponent],
  imports: [
    BrowserModule,
    PagesModule,
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
