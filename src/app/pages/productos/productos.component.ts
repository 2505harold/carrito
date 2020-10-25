import { Component, OnInit } from '@angular/core';
import { MarcaService } from 'src/app/services/marca.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ModeloService } from 'src/app/services/modelo.service';
import { FormGroup } from '@angular/forms';
import { ProductoService } from 'src/app/services/producto.service';
import { MessagesService } from 'src/app/services/messages.service';
import { SubirImagenService } from 'src/app/services/subir-imagen.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  datosProducto: any = {};
  listaProductos: any = [];
  showForm: boolean = false;
  actionForm: string;
  imagenSubir: File;
  imageTemp: string;
  //opciones de los select
  optCateg: any = [];
  optMarca: any = [];
  optModelo: any = [];

  //form
  productForm: FormGroup;

  constructor(
    private _marcaService: MarcaService,
    private _categoriaService: CategoriaService,
    private _modeloService: ModeloService,
    private _productoService: ProductoService,
    private _messageService: MessagesService,
    private _subirImagenService: SubirImagenService
  ) {}

  ngOnInit() {
    this._categoriaService
      .obtener()
      .subscribe((resp) => (this.optCateg = resp));
    this._marcaService.obtener().subscribe((resp) => (this.optMarca = resp));
    this.fillTableProducto();
  }

  verForm(action: string, producto?: any) {
    if (producto) {
      this.datosProducto = producto;
      this.categChange(this.datosProducto.idcategoria);
    }
    this.actionForm = action;
    this.showForm = true;
  }
  ocultarForm() {
    this.showForm = false;
    this.datosProducto = {};
    this.imageTemp = '';
  }

  categChange(id: Int16Array) {
    this._modeloService.obtenerByIdCateg(id).subscribe((resp) => {
      this.optModelo = resp;
    });
  }

  seleccionImagen(archivo: File) {
    if (!archivo) {
      this.imagenSubir = null;
      return;
    }
    if (archivo.type.indexOf('image') < 0) {
      this._messageService.info(
        'Solo se pueden importar archivos del tipo imagen'
      );
      return;
    }

    this.imagenSubir = archivo;
    const reader = new FileReader();
    const urlImageTemp = reader.readAsDataURL(archivo);
    reader.onloadend = () => {
      this.imageTemp = reader.result.toString();
    };
  }

  guardar() {
    if (this.actionForm === 'Agregar') {
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
    } else {
      this._productoService.actualizar(this.datosProducto).subscribe(
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
  }

  guardarImagen() {
    this._subirImagenService
      .subir(this.imagenSubir, 'productos', this.datosProducto.idproducto)
      .then((resp) => {
        this._messageService.success('Imagen actualizada satisfactoriamente');
        this.fillTableProducto();
      })
      .catch((err) => {
        this._messageService.error(err.message);
      });
  }

  fillTableProducto() {
    this._productoService.obtener().subscribe((resp) => {
      this.listaProductos = resp;
    });
  }
}
