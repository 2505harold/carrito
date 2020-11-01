import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalModeloComponent } from 'src/app/components/modal-modelo/modal-modelo.component';
import { ModeloService } from 'src/app/services/modelo.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { MessagesService } from 'src/app/services/messages.service';
import { MarcaService } from 'src/app/services/marca.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css'],
})
export class MantenimientoComponent implements OnInit {
  //habilitar leer el sort
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  //datos para tabla angular material
  dataModelos = new MatTableDataSource();
  dataCategoria = new MatTableDataSource();
  dataMarca = new MatTableDataSource();

  //columnas de tablas
  colsModelo: string[] = ['index', 'md_modelo', 'ct_categoria', 'acciones'];
  colsMarca: string[] = ['index', 'mc_marca', 'acciones'];
  colsCateg: string[] = ['index', 'ct_categoria', 'acciones'];

  constructor(
    public dialog: MatDialog,
    private _modeloService: ModeloService,
    private _categoriaService: CategoriaService,
    private _messageService: MessagesService,
    public _marcaService: MarcaService
  ) {}

  ngOnInit() {
    this.fillTblModelo();
    this.fillTblCategoria();
    this.fillTblMarca();
  }

  openDialog(modal: string, action: string, obj: any) {
    obj.action = action;
    obj.modal = modal;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = obj;
    const dialogRef = this.dialog.open(ModalModeloComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      switch (result.event) {
        case 'Agregar':
          switch (modal) {
            case 'Categorias':
              this.crearCategoria(result);
              break;
            case 'Modelo':
              this.crearModelo(result);
              break;
            case 'Marca':
              this.crearMarca(result);
              break;
          }

        case 'Actualizar':
          switch (modal) {
            case 'Categorias':
              this.actualizarCategoria(result);
              break;
            case 'Modelo':
              this.actualizarModelo(result);
              break;
            case 'Marca':
              this.actualizarMarca(result);
              break;
          }
      }
    });
  }

  /************************************ */
  // METODOS PARA LISTAR EN TABLA
  /************************************ */
  fillTblModelo() {
    this._modeloService
      .obtener()
      .subscribe((resp) => (console.log(resp), (this.dataModelos.data = resp)));
  }

  fillTblCategoria() {
    this._categoriaService
      .obtener()
      .subscribe((resp) => (this.dataCategoria.data = resp));
  }

  fillTblMarca() {
    this._marcaService
      .obtener()
      .subscribe((resp) => (this.dataMarca.data = resp));
  }

  /************************************ */
  // METODOS CREAR
  /************************************ */

  crearModelo(result: any) {
    this._modeloService
      .crear(result.data.valor, result.data.idcategoria)
      .subscribe(
        (resp) => {
          this._messageService.success('Datos guardados satisfactoriamente');
          this.fillTblModelo();
        },
        (err) => {
          this._messageService.error(err.error.message.sqlMessage);
        }
      );
  }

  crearCategoria(result: any) {
    this._categoriaService.crear(result.data.valor).subscribe(
      (resp) => {
        this._messageService.success('Datos guardados satisfactoriamente');
        this.fillTblCategoria();
      },
      (err) => {
        this._messageService.error(err.error.message.sqlMessage);
      }
    );
  }
  crearMarca(result: any) {
    this._marcaService.crear(result.data.valor).subscribe(
      (resp) => {
        this._messageService.success('Datos guardados satisfactoriamente'),
          this.fillTblMarca();
      },
      (err) => {
        this._messageService.error(err.error.message.sqlMessage);
      }
    );
  }

  /************************************ */
  // METODOS ACTUALIZAR
  /************************************ */
  actualizarModelo(result: any) {
    console.log(result);
    this._modeloService
      .actualizar(
        result.data.valor,
        result.data.idcategoria,
        result.data.idmodelo
      )
      .subscribe(
        (resp) => {
          this._messageService.success('Datos actualizados satisfactoriamente');
          this.fillTblModelo();
        },
        (err) => {
          console.log(err);
          this._messageService.error(err.error.message.sqlMessage);
        }
      );
  }

  actualizarMarca(result: any) {
    this._marcaService
      .actualizar(result.data.valor, result.data.idmarca)
      .subscribe(
        (resp) => {
          this._messageService.success('Datos actualizados satisfactoriamente');
          this.fillTblMarca();
        },
        (err) => {
          this._messageService.error(err.error.message.sqlMessage);
        }
      );
  }

  actualizarCategoria(result: any) {
    this._categoriaService
      .actualizar(result.data.valor, result.data.idcategoria)
      .subscribe(
        (resp) => {
          this._messageService.success('Datos actualizados satisfactoriamente');
          this.fillTblCategoria();
        },
        (err) => {
          this._messageService.error(err.error.message.sqlMessage);
        }
      );
  }

  /************************************ */
  // METODOS ELIMINAR
  /************************************ */
  eliminarMarca(data: any) {
    this._messageService.confirm().then((resp) => {
      this._marcaService.eliminar(data).subscribe(
        (resp) => {
          this.fillTblMarca(),
            this._messageService.success('Dato eliminado satisfactoriamente');
        },
        (err) => this._messageService.error(err.error.message.sqlMessage)
      );
    });
  }

  eliminarCategoria(data: any) {
    this._messageService.confirm().then((resp) => {
      this._categoriaService.eliminar(data).subscribe(
        (resp) => {
          this.fillTblCategoria(),
            this._messageService.success('Dato eliminado satisfactoriamente');
        },
        (err) => this._messageService.error(err.error.message.sqlMessage)
      );
    });
  }

  eliminarModelo(data: any) {
    this._messageService.confirm().then((resp) => {
      this._modeloService.eliminar(data).subscribe(
        (resp) => {
          this.fillTblModelo(),
            this._messageService.success('Dato eliminado satisfactoriamente');
        },
        (err) => this._messageService.error(err.error.message.sqlMessage)
      );
    });
  }
}
