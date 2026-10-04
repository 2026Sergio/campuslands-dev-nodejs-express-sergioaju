import express from 'express';
import path from 'path';
import { readFile } from 'fs/promises';

const app = express();

const carpetaData = path.resolve('data');

app.get('/health', (req, res) => {
  res.json({
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'path y rutas seguras'
  });
});

app.get('/motos', async (req, res) => {
  try {
    const archivo = path.join(carpetaData, 'motos.json');
    const datos = await readFile(archivo, 'utf-8');

    res.json(JSON.parse(datos));
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: 'No se pudo leer el archivo'
    });
  }
});

export default app;