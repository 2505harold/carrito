const express = require("express");
const app = express();
const pool = require("../connections/mysql");

// ====================================
// obtener modelos
// ====================================
app.get("/", async (req, res) => {
  pool.query(
    "SELECT * FROM tb_producto t1 inner join tb_categoria t2 on t1.idcategoria = t2.idcategoria inner join tb_marca t3 on t1.idmarca = t3.idmarca inner join tb_modelo t4 on t1.idmodelo = t4.idmodelo order by t1.idproducto desc",
    (err, results) => {
      if (err) res.status(500).json({ ok: false, message: err });
      else {
        res.status(200).json({ ok: true, datos: results });
      }
    }
  );
});

// ====================================
// crear
// ====================================
app.post("/", async (req, res) => {
  const {
    idmodelo,
    idmarca,
    idcategoria,
    prod_codigo,
    prod_nombre,
    prod_precio,
    prod_cantidad,
  } = req.body;

  const newProducto = {
    idmodelo,
    idmarca,
    idcategoria,
    prod_codigo,
    prod_nombre,
    prod_precio,
    prod_cantidad,
  };

  pool.query("INSERT INTO tb_producto set ?", [newProducto], (err, results) => {
    if (err) res.status(500).json({ ok: false, message: err });
    else {
      res
        .status(200)
        .json({ ok: true, message: "Datos insertados correctamente" });
    }
  });
});

module.exports = app;
