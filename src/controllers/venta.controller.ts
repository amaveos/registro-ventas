import { Request, Response } from 'express';
import { Venta } from '../models/venta.model';
import { DetalleVenta } from '../models/detalleVenta.model';
import { Producto } from '../models/producto.model';

export const registrarVenta = async (req: Request, res: Response): Promise<void> => {
    try {
        const { producto_id, cantidad } = req.body;

        const producto: any = await Producto.findByPk(producto_id);
        if (!producto) {
            res.status(404).json({ message: "Producto no encontrado" });
            return;
        }

        const subtotal = producto.precio * cantidad;

        const nuevaVenta: any = await Venta.create({ total: subtotal });

        await DetalleVenta.create({
            venta_id: nuevaVenta.id,
            producto_id,
            cantidad,
            subtotal
        });

        producto.stock -= cantidad;
        await producto.save();

        res.status(201).json({ message: "Venta registrada con éxito" });
    } catch (error) {
        console.error("Error al registrar la venta:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const obtenerInformeVentas = async (req: Request, res: Response) => {
    try {
        const informe = await DetalleVenta.findAll({
            include: [
                { model: Producto, attributes: ['nombre', 'precio'] },
                { model: Venta, attributes: ['fecha'] }
            ]
        });
        res.json(informe);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener informe de ventas" });
    }
};