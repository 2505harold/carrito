import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-modal-modelo',
  templateUrl: './modal-modelo.component.html',
  styleUrls: ['./modal-modelo.component.css'],
})
export class ModalModeloComponent implements OnInit {
  modal: string;
  action: string;
  localData: any;
  showModalCategoria: boolean = false;
  showModalModelo: boolean = false;
  showModalMarca: boolean = false;

  //valores de categoria
  optCateg: any;

  constructor(
    public dialogRef: MatDialogRef<ModalModeloComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    public _categoriaService: CategoriaService
  ) {
    this.localData = { ...data };
    console.log({ ...data });
    this.action = this.localData.action;
    this.modal = this.localData.modal;
    _categoriaService.obtener().subscribe((resp) => (this.optCateg = resp));
    if (this.modal === 'Modelo') {
      this.showModalCategoria = true;
      this.localData.valor = this.localData.md_modelo;
    } else if (this.modal === 'Marca') {
      this.localData.valor = this.localData.mc_marca;
    } else if (this.modal === 'Categorias') {
      this.localData.valor = this.localData.ct_categoria;
    } else if (this.modal === 'Producto') {
      this.showModalModelo = true;
      this.showModalMarca = true;
      this.showModalCategoria = true;
    }
  }

  ngOnInit(): void {}

  doAction() {
    this.dialogRef.close({
      event: this.action,
      data: this.localData,
    });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
