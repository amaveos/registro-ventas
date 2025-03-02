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
exports.crearProducto = exports.obtenerProductos = void 0;
const producto_model_1 = require("../models/producto.model");
const obtenerProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productos = yield producto_model_1.Producto.findAll();
    res.json(productos);
});
exports.obtenerProductos = obtenerProductos;
const crearProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoProducto = yield producto_model_1.Producto.create(req.body);
    res.status(201).json(nuevoProducto);
});
exports.crearProducto = crearProducto;
