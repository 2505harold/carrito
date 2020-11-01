// ====================================
// VARIABLE DE ENTORNO
// ====================================
process.env.NODE_ENV = process.env.NODE_ENV || "DEV";

// ====================================
// Credenciales conexion base de datos
// ====================================

process.env.CARRITO_HOST_DB = process.env.CARRITO_HOST_DB || "localhost";
process.env.CARRITO_USER_DB = process.env.CARRITO_USER_DB || "root";
process.env.CARRITO_PWD_DB = process.env.CARRITO_PWD_DB || "Hgeminis2014+";
process.env.CARRITO_NAME_DB = process.env.CARRITO_NAME_DB || "db_carrito";
