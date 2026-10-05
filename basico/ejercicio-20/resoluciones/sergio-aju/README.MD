# Ejercicio 20 - Middleware express.json

## Descripción

Mini API creada con Node.js y Express para practicar el middleware `express.json()` utilizando una temática de dibujo digital.

El ejercicio permite recibir información en formato JSON mediante una petición POST.

## Instalación

```bash
npm install
```

## Ejecutar

Modo desarrollo:

```bash
npm run dev
```

Modo normal:

```bash
npm start
```

Servidor:

```text
http://localhost:3000
```

## Rutas

### Health

```http
GET /health
```

### Crear dibujo

```http
POST /dibujos
```

Body:

```json
{
  "nombre": "Paisaje digital",
  "estilo": "Realista"
}
```

Respuesta:

```json
{
  "ok": true,
  "dibujo": {
    "id": 1,
    "nombre": "Paisaje digital",
    "estilo": "Realista"
  }
}
```

## Middleware utilizado

Se utiliza:

```js
app.use(express.json());
```

Este middleware permite que Express procese las peticiones que contienen información en formato JSON y podamos acceder a ella mediante `req.body`.

## Validación

Si falta `nombre` o `estilo`, la API responde con `400 Bad Request`.

## Estructura

* `app.js`: configura Express y el middleware.
* `server.js`: inicia el servidor.
* `routes`: define las rutas.
* `controllers`: recibe y valida los datos.
* `services`: crea el dibujo.

## Tecnologías

* Node.js
* Express
* JavaScript
