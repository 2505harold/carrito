import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-categoria',
  templateUrl: './modal-categoria.component.html',
  styleUrls: ['./modal-categoria.component.css'],
})
export class ModalCategoriaComponent implements OnInit {
  action: string;
  localData: any;
  constructor(
    public dialogRef: MatDialogRef<ModalCategoriaComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

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
