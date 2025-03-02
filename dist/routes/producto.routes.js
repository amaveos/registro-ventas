"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producto_controller_1 = require("../controllers/producto.controller");
const router = (0, express_1.Router)();
router.get('/productos', producto_controller_1.obtenerProductos);
router.post('/productos', producto_controller_1.crearProducto);
exports.default = router;
