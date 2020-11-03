CREATE DATABASE db_carrito;

USE db_carrito;

--CREANDO TABLA CATEGORIA

CREATE TABLE tb_categoria
(
    idcategoria INT NOT NULL,
    ct_categoria VARCHAR(255)
);

ALTER TABLE tb_categoria ADD PRIMARY KEY (idcategoria);

ALTER TABLE tb_categoria MODIFY idcategoria INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

--CREANDO TABLA MODELO

CREATE TABLE tb_modelo
(
    idmodelo INT NOT NULL,
    idcategoria INT NOT NULL,
    md_modelo VARCHAR(255),
    CONSTRAINT fk_CategModelo FOREIGN KEY(idcategoria) REFERENCES tb_categoria(idcategoria)
);

ALTER TABLE tb_modelo ADD PRIMARY KEY (idmodelo);

ALTER TABLE tb_modelo MODIFY idmodelo INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;


--CREANDO TABLA MARCA

CREATE TABLE tb_marca
(
    idmarca INT NOT NULL,
    mc_marca VARCHAR(150)
);

ALTER TABLE tb_marca ADD PRIMARY KEY (idmarca);

ALTER TABLE tb_marca MODIFY idmarca INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

--CREANDO TABLA PEDIDO

CREATE TABLE tb_pedido
(
    idpedido INT NOT NULL,
    idusuario INT NOT NULL,
    pd_numero VARCHAR(20),
    pd_fecha VARCHAR(15),
    pd_total FLOAT,
    pd_cantidad INT,
    pd_fentrega VARCHAR(15),
    CONSTRAINT fk_pedidoUsuario FOREIGN KEY (idusuario) REFERENCES tb_usuario(idusuario)
);

ALTER TABLE tb_pedido ADD PRIMARY KEY (idpedido);

ALTER TABLE tb_pedido MODIFY idpedido INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

--CREANDO TABLA USUARIO

CREATE TABLE tb_usuario
(
    idusuario INT NOT NULL,
    ur_nombre VARCHAR(50),
    ur_apellido VARCHAR(50),
    ur_rol varchar(50),
    ur_dni VARCHAR(50),
    ur_email VARCHAR(50),
    ur_imagen VARCHAR(200),
    ur_password VARCHAR(255)
);

ALTER TABLE tb_usuario ADD PRIMARY KEY (idusuario);

ALTER TABLE tb_usuario MODIFY idusuario INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

--CREANDO TABLA PRODUCTO

CREATE TABLE tb_producto
(
    idproducto INT NOT NULL,
    idmodelo INT NOT NULL,
    idmarca INT NOT NULL,
    idcategoria INT NOT NULL,
    prod_codigo VARCHAR(15),
    prod_nombre VARCHAR(255),
    prod_precio FLOAT,
    prod_image VARCHAR(255),
    prod_cantidad INT,
    CONSTRAINT fk_ModelProducto FOREIGN KEY (idmodelo) REFERENCES tb_modelo(idmodelo),
    CONSTRAINT fk_MarcaProducto FOREIGN KEY (idmarca) REFERENCES tb_marca (idmarca),
    CONSTRAINT fk_CategProducto FOREIGN KEY (idcategoria) REFERENCES tb_categoria(idcategoria),
);

--CREANDO TABLA CARRITO

CREATE TABLE tb_carrito
(
    idcarrito INT NOT NULL,
    car_user VARCHAR(20),
    idproducto INT NOT NULL,
    car_cantidad INT,
    car_total FLOAT
);

ALTER TABLE tb_carrito ADD PRIMARY KEY (idcarrito);

ALTER TABLE tb_carrito MODIFY idcarrito INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;