//const modo = "DES";
module.exports = {
  mySql: {
    host: process.env.MODO === "PROD" ? "boos.com.pe" : "localhost",
    user: process.env.MODO === "PROD" ? "boo2704d_user_dbcarrito" : "root",
    password: "Hgeminis2014+",
    database: process.env.MODO === "PROD" ? "boo2704d_carrito" : "db_carrito",
  },
};
