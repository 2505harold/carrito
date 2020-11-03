import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { MainService } from 'src/app/services/main.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  categorias: any;
  modelos: any;
  marcas: any;
  productos: any;
  user: string

  constructor(public _mainService:MainService, private _carritoService:CarritoService, private _msgService: MessagesService) { }

  ngOnInit() {
    this._mainService
    .categorias()
    .subscribe((resp) => (this.categorias = resp));
  this._mainService.modelos().subscribe((resp) => (this.modelos = resp));
  this._mainService.marcas().subscribe((resp) => (this.marcas = resp));
  this._mainService.productos().subscribe((resp) => (this.productos = resp));
  }

  filtrar(tipo:string,valor:string) {
    this._mainService.productosPorValor(tipo,valor).subscribe((resp)=>this.productos=resp)
  }

  carrito(producto: any) {
    const carrito = {
      idproducto: producto.idproducto,car_cantidad : 1,car_total: producto.prod_precio, car_user: localStorage.getItem('userCarrito')
    }
    this._carritoService.crear(carrito).subscribe(resp =>
      this._msgService.success('Se agrego al carrito'),(err)=>this._msgService.error(`${err.error.message.sql}.${err.error.message.sqlMessage}`))
  }

} 
