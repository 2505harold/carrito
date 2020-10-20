const express = require("express");
const app = express();
const path = require("path");

// Inicializacion
app.set("port", process.env.PORT || 3008);
require("./connections/mysql");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,DELETE,GET");
  next();
});

// Rutas
app.use("/producto", require("./routes/producto"));
app.use("/modelo", require("./routes/modelo"));
app.use("/marca", require("./routes/marca"));
app.use("/categoria", require("./routes/categoria"));
app.use("/pedido", require("./routes/pedido"));
app.use("/usuario", require("./routes/usuario"));
app.use("/login", require("./routes/login"));

// Public

//configuracion al subir a heroku
if (process.env.NODE_ENV === "PROD") {
  app.use(express.static(path.join(__dirname, "../dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
  });
}

// Servidor escuchando
app.listen(app.get("port"), () => {
  console.log("Server listen port " + app.get("port"));
});
