const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");
const fs = require("fs");
const img = require("../helpers/img");

const app = express();
app.use(fileUpload());

// ====================================
// Obtener imagen
// ====================================
app.get("/:tipo/:img", (req, res) => {
  const tipo = req.params.tipo;
  const img = req.params.img;

  const pathImage = path.resolve(__dirname, `../uploads/${tipo}/${img}`);
  if (fs.existsSync(pathImage)) {
    res.sendFile(pathImage);
  } else {
    res.sendFile(path.resolve(__dirname, `../uploads/${tipo}/not_found.png`));
  }
});

// ====================================
// Subir imagen
// ====================================
app.put("/:tipo/:id", (req, res) => {
  const tipo = req.params.tipo;
  const id = req.params.id;
  if (!req.files)
    return res
      .status(400)
      .json({ ok: false, message: "Debe seleccionar una imagen" });

  //Obtenemos el archivo importado
  const fileImg = req.files.imagen;
  //Obtenemos el nombre del archivo
  const nameFile = fileImg.name;
  //Obtenemos la extension del archivo
  const extFile = nameFile.split(".")[nameFile.split(".").length - 1];
  //Extensiones validas
  const extValidas = ["jpg", "png", "gif", "jpeg"];
  if (extValidas.indexOf(extFile) < 0) {
    return res.status(400).json({
      ok: false,
      message: `Las extensiones validas son ${extValidas.join(",")}`,
    });
  }

  //establecemos un nombre de archivo personalizado
  const newNameFile = `${id}-${new Date().getMilliseconds()}.${extFile}`;
  //Movemos el archivo a una carpeta
  const pathFile = path.resolve(__dirname, `../uploads/${tipo}/${newNameFile}`);
  fileImg.mv(pathFile, (err) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        message: `Error al mover el archivo`,
        error: err,
      });
    }
  });

  //En caso exista la imagen del producto guardado en la carpeta "upload" se elimina
  img.borrarImgOfUpload(id, tipo, "tb_producto", "idproducto", res);
  img.subirImg(id, newNameFile, "tb_producto", "prod_image", "idproducto", res);
});

module.exports = app;
