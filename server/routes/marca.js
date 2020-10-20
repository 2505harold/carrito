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
app.post("/", async (req, res) => {
  const { marca } = req.body;

  const newMarca = {
    mc_marca: marca,
  };

  await pool.query("INSERT INTO tb_marca set ?", [newMarca]);
  res.json({ ok: true, message: "Datos insertados correctamente" });
});

// ====================================
// actualizar
// ====================================
app.put("/:id", async (req, res) => {
  const { marca } = req.body;
  const id = req.params.id;
  const updateMarca = {
    mc_marca: marca,
  };

  await pool.query("UPDATE tb_marca set ? where idmarca = ?", [
    updateMarca,
    id,
  ]);
  res.json({ ok: true, message: "Datos actualizados correctamente" });
});

// ====================================
// actualizar
// ====================================
app.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await pool.query("DELETE FROM tb_marca WHERE idmarca = ?", [id]);
  res.json({ ok: true, message: "Dato eliminado correctamente" });
});

module.exports = app;
