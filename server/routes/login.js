const express = require("express");
const app = express();
const pool = require("../connections/mysql");
const bcrypt = require("bcryptjs");

// ====================================
// Login
// ====================================
app.post("/", (req, res) => {
  const { email, password } = req.body;
  pool.query(
    "SELECT * FROM tb_usuario WHERE ur_email = ?",
    [email],
    (err, result) => {
      if (err)
        return res
          .status(500)
          .json({ ok: false, message: "Exist an internal error", err });
      if (result.length == 0)
        return res.status(400).json({ ok: false, message: "User not exist" });
      if (!bcrypt.compareSync(password, result[0].ur_password))
        return res
          .status(400)
          .json({ ok: false, message: "Password is incorrect" });

      return res.status(200).json({
        ok: true,
        usuario: result[0],
      });
    }
  );
});

module.exports = app;
