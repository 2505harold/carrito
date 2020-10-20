import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable()
export class MessagesService {
  constructor() {}

  success(msg: string) {
    Swal.fire({
      icon: 'success',
      title: msg,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  error(err: string) {
    console.log(err);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: err,
    });
  }
}
