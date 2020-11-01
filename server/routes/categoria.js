const express = require("express");
const app = express();
const pool = require("../connections/mysql");

// ====================================
// obtener lista
// ====================================
app.get("/", async (req, res) => {
  const lista = await pool.query(
    "SELECT * FROM tb_categoria order by idcategoria desc"
  );
  res.json({ ok: true, datos: lista });
});

// ====================================
// agregar
// ====================================
app.post("/", async (req, res) => {
  const { categoria } = req.body;

  const newCategory = {
    ct_categoria: categoria,
  };

  await pool.query("INSERT INTO tb_categoria set ?", [newCategory]);
  res.json({ ok: true, message: "Datos insertados correctamente" });
});

// ====================================
// actualizar
// ====================================
app.put("/:id", async (req, res) => {
  const { categoria } = req.body;
  const id = req.params.id;
  const newCategory = {
    ct_categoria: categoria,
  };

  pool.query(
    "UPDATE tb_categoria set ? where idcategoria = ?",
    [newCategory, id],
    (err, results) => {
      if (err) res.status(500).json({ ok: false, message: err });
      else {
        res
          .status(200)
          .json({ ok: true, message: "Datos actualizados correctamente" });
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
    "DELETE FROM tb_categoria WHERE idcategoria = ?",
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
