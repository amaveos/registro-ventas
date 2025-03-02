"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const venta_controller_1 = require("../controllers/venta.controller");
const router = (0, express_1.Router)();
router.post("/ventas", venta_controller_1.registrarVenta);
router.get("/ventas", venta_controller_1.obtenerInformeVentas);
exports.default = router;
