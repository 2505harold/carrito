import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ModalModeloComponent } from 'src/app/components/modal-modelo/modal-modelo.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

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
          console.log('agregar');

        case 'Actualizar':
          console.log(result);
      }
    });
  }
}
