import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginGuard } from './guards/login.guard';
import { ModeloService } from './modelo.service';
import { MarcaService } from './marca.service';
import { MessagesService } from './messages.service';
import { ProductoService } from './producto.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    LoginService,
    LoginGuard,
    ModeloService,
    MessagesService,
    MarcaService,
    ProductoService,
  ],
})
export class ServicesModule {}
