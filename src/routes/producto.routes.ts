import { Router } from 'express';
import { obtenerProductos, crearProducto } from '../controllers/producto.controller';

const router = Router();

router.get('/productos', obtenerProductos);
router.post('/productos', crearProducto);

export default router;
