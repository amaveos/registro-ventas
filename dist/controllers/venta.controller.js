"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerInformeVentas = exports.registrarVenta = void 0;
const venta_model_1 = require("../models/venta.model");
const detalleVenta_model_1 = require("../models/detalleVenta.model");
const producto_model_1 = require("../models/producto.model");
const registrarVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { producto_id, cantidad } = req.body;
        const producto = yield producto_model_1.Producto.findByPk(producto_id);
        if (!producto) {
            res.status(404).json({ message: "Producto no encontrado" });
            return;
        }
        const subtotal = producto.precio * cantidad;
        const nuevaVenta = yield venta_model_1.Venta.create({ total: subtotal });
        yield detalleVenta_model_1.DetalleVenta.create({
            venta_id: nuevaVenta.id,
            producto_id,
            cantidad,
            subtotal
        });
        producto.stock -= cantidad;
        yield producto.save();
        res.status(201).json({ message: "Venta registrada con éxito" });
    }
    catch (error) {
        console.error("Error al registrar la venta:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
});
exports.registrarVenta = registrarVenta;
const obtenerInformeVentas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const informe = yield detalleVenta_model_1.DetalleVenta.findAll({
            include: [
                { model: producto_model_1.Producto, attributes: ['nombre', 'precio'] },
                { model: venta_model_1.Venta, attributes: ['fecha'] }
            ]
        });
        res.json(informe);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener informe de ventas" });
    }
});
exports.obtenerInformeVentas = obtenerInformeVentas;
