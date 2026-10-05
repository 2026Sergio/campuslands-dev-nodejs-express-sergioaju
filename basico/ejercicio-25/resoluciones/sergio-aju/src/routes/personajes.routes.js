import { Router } from 'express';
import {
  listar,
  obtener,
  crear
} from '../controllers/personajes.controller.js';

const router = Router();

router.get('/', listar);
router.get('/:id', obtener);
router.post('/', crear);

export default router;