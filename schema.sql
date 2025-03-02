CREATE DATABASE tienda_db;
USE tienda_db;

CREATE TABLE productos (
    id SERIAL PRIMARY KEY,         
    nombre VARCHAR(100) NOT NULL,  
    precio DECIMAL(10,2) NOT NULL, 
    stock INT NOT NULL             
);


CREATE TABLE ventas (
    id SERIAL PRIMARY KEY,     
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    total DECIMAL(10,2) NOT NULL   
);


CREATE TABLE detalle_ventas (
    id SERIAL PRIMARY KEY,         
    venta_id INT NOT NULL,           
    producto_id INT NOT NULL,        
    cantidad INT NOT NULL,           
    subtotal DECIMAL(10,2) NOT NULL, 
    FOREIGN KEY (venta_id) REFERENCES ventas(id) ON DELETE CASCADE,
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);