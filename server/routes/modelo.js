const express = require("express");
const app = express();
const pool = require("../connections/mysql");

// ====================================
// obtener lista
// ====================================
app.get("/", async (req, res) => {
  pool.query(
    "SELECT * FROM tb_modelo t1 inner join tb_categoria t2 on t1.idcategoria = t2.idcategoria order by t1.idmodelo desc",
    (err, results) => {
      if (err) res.status(500).json({ ok: false, message: err });
      else {
        res.status(200).json({ ok: true, datos: results });
      }
    }
  );
});

// ====================================
// agregar
// ====================================
app.post("/", async (req, res) => {
  const { modelo, idcategoria } = req.body;
  const newModelo = {
    idcategoria,
    md_modelo: modelo,
  };

  pool.query("INSERT INTO tb_modelo set ?", [newModelo], (err, results) => {
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
app.put("/:id", async (req, res) => {
  console.log(req.body);
  const { modelo, idcategoria } = req.body;
  const id = req.params.id;
  console.log(id);
  const updateModelo = {
    idcategoria,
    md_modelo: modelo,
  };

  pool.query(
    "UPDATE tb_modelo set ? where idmodelo = ?",
    [updateModelo, id],
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
  await pool.query("DELETE FROM tb_modelo WHERE idmodelo = ?", [id]);
  res.json({ ok: true, message: "Dato eliminado correctamente" });
});

module.exports = app;
