//const modo = "DES";
module.exports = {
  mySql: {
    host: process.env.NODE_ENV === "PROD" ? "boos.com.pe" : "localhost",
    user: process.env.NODE_ENV === "PROD" ? "boo2704d_user_dbcarrito" : "root",
    password: "Hgeminis2014+",
    database:
      process.env.NODE_ENV === "PROD" ? "boo2704d_carrito" : "db_carrito",
  },
};
