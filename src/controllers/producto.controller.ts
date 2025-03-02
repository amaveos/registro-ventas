import { Request, Response } from 'express';
import { Producto } from '../models/producto.model';

export const obtenerProductos = async (req: Request, res: Response) => {
    const productos = await Producto.findAll();
    res.json(productos);
};

export const crearProducto = async (req: Request, res: Response) => {
    const nuevoProducto = await Producto.create(req.body);
    res.status(201).json(nuevoProducto);
};
