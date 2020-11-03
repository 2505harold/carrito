const express = require("express");
const app = express();
const pool = require("../connections/mysql");

// ====================================
// agregar
// ====================================
app.post("/", async (req, res) => {
  
    pool.query("INSERT INTO tb_carrito set ?", [req.body.carrito],(err, results) => {
        if (err) res.status(500).json({ ok: false, message: err });
        else {
          res
            .status(200)
            .json({ ok: true, message: "Datos insertados correctamente" });
        }
      });
});

// ====================================
// obtener lista de carritos
// ====================================
app.get("/:user", async (req, res) => {
    const user = req.params.user
    pool.query(
      `SELECT * FROM tb_carrito t1 inner join tb_producto t2 on t1.idproducto = t2.idproducto where car_user = '${user}'`,
      (err, results) => {
        if (err) res.status(500).json({ ok: false, message: err });
        else {
          res.status(200).json({ ok: true, datos: results });
        }
      }
    );
});
  
// ====================================
// actualizar
// ====================================
app.put("/:id", async (req, res) => {
  const id = req.params.id;
  const {car_cantidad,car_total} = req.body
  const dato = {
    car_cantidad, car_total
  }
  pool.query(
    `UPDATE tb_carrito SET ? WHERE idcarrito = ?`,[dato,id],
    (err, results) => {
      if (err) res.status(500).json({ ok: false, message: err });
      else {
        res.status(200).json({ ok: true, message: 'Datos actualizados' });
      }
    }
  );
});

// ====================================
// eliminar
// ====================================
app.delete("/:id", async (req, res) => {
  const id = req.params.id;
  pool.query(
    "DELETE FROM tb_carrito WHERE idcarrito = ?",
    [id],
    (err, results) => {
      if (err) {
        res.status(500).json({ ok: false, message: err });
      } else {
        res
          .status(200)
          .json({ ok: true, message: "Dato eliminado satisfactoriamente" });
      }
    }
  );
});
  
module.exports = app;