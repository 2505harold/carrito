const express = require("express");
const app = express();
const pool = require("../connections/mysql");

// ====================================
// get pedido
// ====================================
app.get("/lista", (req, res) => {
  res.json({ ok: true });
});

// ====================================
// get pedido
// ====================================
app.post("/agregar", async (req, res) => {
  const {
    idproducto,
    idmodelo,
    idmarca,
    idcategoria,
    idpedido,
    idusuario,
    prod_codigo,
    prod_nombre,
    prod_precio,
    prod_image,
    prod_cantidad,
  } = req.body;

  const newProducto = {
    idproducto,
    idmodelo,
    idmarca,
    idcategoria,
    idpedido,
    idusuario,
    prod_codigo,
    prod_nombre,
    prod_precio,
    prod_image,
    prod_cantidad,
  };

  await pool.query("INSERT INTO tb_producto set ?", [newProducto]);
  res.json({ ok: true, message: "Datos insertados correctamente" });
});

module.exports = app;
