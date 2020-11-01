const express = require("express");
const app = express();
const pool = require("../connections/mysql");

// ====================================
// obtener lista
// ====================================
app.get("/", async (req, res) => {
  const lista = await pool.query(
    "SELECT * FROM tb_marca order by idmarca desc"
  );
  res.json({ ok: true, datos: lista });
});

// ====================================
// agregar
// ====================================
app.post("/", (req, res) => {
  const { marca } = req.body;

  const newMarca = {
    mc_marca: marca,
  };

  pool.query("INSERT INTO tb_marca set ?", [newMarca], (err, results) => {
    if (err) res.status(500).json({ ok: false, message: err });
    else {
      res
        .status(200)
        .json({ ok: true, message: "Datos insertados correctamente" });
    }
  });
});

// ====================================
// actualizar
// ====================================
app.put("/:id", (req, res) => {
  const { marca } = req.body;
  const id = req.params.id;
  const updateMarca = {
    mc_marca: marca,
  };

  pool.query(
    "UPDATE tb_marca set ? where idmarca = ?",
    [updateMarca, id],
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
// Eliminar
// ====================================
app.delete("/:id", (req, res) => {
  const id = req.params.id;
  pool.query("DELETE FROM tb_marca WHERE idmarca = ?", [id], (err, results) => {
    if (err) {
      res.status(500).json({ ok: false, message: err });
    } else {
      res
        .status(200)
        .json({ ok: true, message: "Dato eliminado satisfactoriamente" });
    }
  });
});

module.exports = app;
