import express from 'express';
import dibujosRoutes from './routes/dibujos.routes.js';

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'middleware express.json'
  });
});

app.use('/dibujos', dibujosRoutes);

export default app;