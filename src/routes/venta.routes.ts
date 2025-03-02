import { Router } from "express";
import { registrarVenta, obtenerInformeVentas } from "../controllers/venta.controller";

const router = Router();

router.post("/ventas", registrarVenta);
router.get("/ventas", obtenerInformeVentas);

export default router;
