import { guardarDibujo } from '../services/dibujos.service.js';

export function crearDibujo(req, res) {
  const { nombre, estilo } = req.body;

  if (!nombre || !estilo) {
    return res.status(400).json({
      ok: false,
      message: 'El nombre y el estilo son obligatorios'
    });
  }

  const dibujo = guardarDibujo(nombre, estilo);

  res.status(201).json({
    ok: true,
    dibujo
  });
}