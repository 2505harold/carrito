import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ModalModeloComponent } from 'src/app/components/modal-modelo/modal-modelo.component';
import { MarcaService } from 'src/app/services/marca.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ModeloService } from 'src/app/services/modelo.service';
import { FormGroup } from '@angular/forms';
import { ProductoService } from 'src/app/services/producto.service';
import { MessagesService } from 'src/app/services/messages.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  datosProducto: any = {};
  datosTabla = new MatTableDataSource();
  showForm: boolean = false;
  actionForm: string;
  //opciones de los select
  optCateg: any = [];
  optMarca: any = [];
  optModelo: any = [];
  //table material
  cols: string[] = [
    'index',
    'prod_codigo',
    'prod_nombre',
    'mc_marca',
    'ct_categoria',
    'md_modelo',
    'prod_precio',
    'prod_cantidad',
    'acciones',
  ];

  //form
  productForm: FormGroup;

  constructor(
    private _marcaService: MarcaService,
    private _categoriaService: CategoriaService,
    private _modeloService: ModeloService,
    private _productoService: ProductoService,
    private _messageService: MessagesService
  ) {}

  ngOnInit() {
    this._categoriaService
      .obtener()
      .subscribe((resp) => (this.optCateg = resp));
    this._marcaService.obtener().subscribe((resp) => (this.optMarca = resp));
    this.fillTableProducto();
  }

  verForm(action: string) {
    this.actionForm = action;
    this.showForm = true;
  }
  ocultarForm() {
    this.showForm = false;
  }

  categChange(value: Int16Array) {
    this._modeloService.obtenerByIdCateg(value).subscribe((resp) => {
      this.optModelo = resp;
    });
  }

  guardar() {
    this._productoService.crear(this.datosProducto).subscribe(
      (resp: any) => {
        this.datosProducto = {};
        this.fillTableProducto();
        this._messageService.success(resp.message);
      },
      (err) => {
        this._messageService.error(err.error.message.sqlMessage);
      }
    );
  }

  fillTableProducto() {
    this._productoService.obtener().subscribe((resp) => {
      this.datosTabla.data = resp;
    });
  }

  // openDialog(modal: string, action: string, obj: any) {
  //   obj.action = action;
  //   obj.modal = modal;
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   dialogConfig.data = obj;
  //   const dialogRef = this.dialog.open(ModalModeloComponent, dialogConfig);
  //   dialogRef.afterClosed().subscribe((result) => {
  //     switch (result.event) {
  //       case 'Agregar':
  //         console.log('agregar');

  //       case 'Actualizar':
  //         console.log(result);
  //     }
  //   });
  // }
}
