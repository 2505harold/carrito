import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { MarcaService } from './marca.service';

@Injectable()
export class MessagesService {
  constructor(private _marcaService: MarcaService) {}

  success(msg: string) {
    Swal.fire({
      icon: 'success',
      title: msg,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  error(err: string) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: err,
    });
  }

  info(msg: string) {
    Swal.fire({
      icon: 'info',
      title: 'Oops...',
      text: msg,
    });
  }

  confirm() {
    return new Promise((resolve, reject) => {
      Swal.fire({
        title: 'Estas seguro?',
        text: 'No podra revertir esta accion',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminarlo!',
      }).then((result) => {
        if (result.isConfirmed) {
          resolve({ ok: true });
        }
      });
    });
  }
}
