const pool = require("../connections/mysql");
const fs = require("fs");
const path = require("path");

module.exports = {
  subirImg(id, nombre, nameTable, nameFieldImg, nameFieldId, res) {
    pool.query(
      `UPDATE ${nameTable} set ${nameFieldImg} = ? WHERE ${nameFieldId} = ?`,
      [nombre, id],
      (err, results) => {
        if (err) return res.status(500).json({ ok: false, message: err });
        else {
          res
            .status(200)
            .json({ ok: true, message: "Datos actualizados correctamente" });
        }
      }
    );
  },
  borrarImgOfUpload(id, tipo, nameTable, nameFieldId, res) {
    pool.query(
      `SELECT * FROM ${nameTable} WHERE ${nameFieldId} = ?`,
      [id],
      (err, results) => {
        if (err) return res.status(500).json({ ok: false, message: err });
        if (results.length == 0)
          return res
            .status(500)
            .json({ ok: false, message: `No existe registro con ID = ${id}` });
        //existe producto
        const pathViejo = path.resolve(
          __dirname,
          `../uploads/${tipo}/${results[0].prod_image}`
        );
        if (fs.existsSync(pathViejo)) fs.unlinkSync(pathViejo);
      }
    );
  },
};
