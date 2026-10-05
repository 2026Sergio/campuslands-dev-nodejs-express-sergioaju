import { Router } from 'express';
import { crearDibujo } from '../controllers/dibujos.controller.js';

const router = Router();

router.post('/', crearDibujo);

export default router;