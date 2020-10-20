const express = require("express");
const app = express();
const pool = require("../connections/mysql");
const bcrypt = require("bcryptjs");

// ====================================
// obtener lista
// ====================================
app.get("/", async (req, res) => {
  const lista = await pool.query("SELECT * FROM tb_usuario");
  res.json({ ok: true, datos: lista });
});

// ====================================
// agregar
// ====================================
app.post("/", (req, res) => {
  const { nombre, apellido, dni, email, password, rol } = req.body;
  const newPassword = bcrypt.hashSync(password);
  const newUsuario = {
    ur_nombre: nombre,
    ur_apellido: apellido,
    ur_dni: dni,
    ur_email: email,
    ur_password: newPassword,
    ur_rol: rol,
  };

  pool.query("INSERT INTO tb_usuario set ?", [newUsuario], (err, results) => {
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
  const { nombre, apellido, dni, email, password } = req.body;
  const id = req.params.id;
  const updateUsuario = {
    ur_nombre: nombre,
    ur_apellido: apellido,
    ur_dni: dni,
    ur_email: email,
    ur_password: password,
  };

  await pool.query(
    "UPDATE tb_usuario set ? where idusuario = ?",
    [updateUsuario, id],
    (err, results) => {
      if (err) res.status(500).json({ ok: false, message: err });
      else {
        res
          .status(200)
          .json({ ok: true, message: "Dato actualzado correctamente" });
      }
    }
  );
});

// ====================================
// eliminar
// ====================================
app.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await pool.query(
    "DELETE FROM tb_usuario WHERE idusuario = ?",
    [id],
    (err, results) => {
      if (err) res.status(500).json({ ok: false, message: err });
      else {
        res
          .status(200)
          .json({ ok: true, message: "Dato eliminado correctamente" });
      }
    }
  );
});

module.exports = app;
