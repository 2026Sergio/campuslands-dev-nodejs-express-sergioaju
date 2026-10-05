import express from 'express';
import personajesRoutes from './routes/personajes.routes.js';

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'respuestas HTTP correctas'
  });
});

app.use('/personajes', personajesRoutes);

export default app;