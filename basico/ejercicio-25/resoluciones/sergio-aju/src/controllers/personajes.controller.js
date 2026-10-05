import {
  listarPersonajes,
  buscarPersonaje,
  crearPersonaje
} from '../services/personajes.service.js';

export function listar(req, res) {
  res.status(200).json(listarPersonajes());
}

export function obtener(req, res) {
  const personaje = buscarPersonaje(req.params.id);

  if (!personaje) {
    return res.status(404).json({
      ok: false,
      message: 'Personaje no encontrado'
    });
  }

  res.status(200).json(personaje);
}

export function crear(req, res) {
  const { nombre, clase } = req.body;

  if (!nombre || !clase) {
    return res.status(400).json({
      ok: false,
      message: 'Nombre y clase son obligatorios'
    });
  }

  res.status(201).json(crearPersonaje(nombre, clase));
}