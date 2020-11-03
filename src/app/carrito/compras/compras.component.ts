import { Component, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { MatTableDataSource } from '@angular/material/table';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  carrito: any;
  total: Number = 0
    //datos para tabla angular material
    dataCarrito = new MatTableDataSource();
  
    //columnas de tablas
    columns: string[] = ['index', 'prod_nombre', 'car_cantidad', 'car_total','accion'];

  constructor(private _carritoService:CarritoService) { }

  ngOnInit() {
    this.loadCarrito()
  }

  loadCarrito() {
    this.total = 0
    this._carritoService.obtener().subscribe(resp =>{ this.dataCarrito.data = resp, resp.forEach(el => {
      this.total += el.car_total
    });})
  }

  onKeyUp(event, element) {
    console.log(element)
    const qty = event.target.value + event.key
    if (!isNaN (qty)) {
      this._carritoService.actualizar(qty,element.prod_precio*qty,element.idcarrito).subscribe(resp=>this.loadCarrito())
    }
  }

  eliminar() {
    
  }






}
