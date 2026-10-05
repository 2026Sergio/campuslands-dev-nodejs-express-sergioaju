# Básico 25 - Respuestas HTTP correctas

## Descripción

API sencilla de personajes de videojuegos RPG desarrollada con Node.js y Express.

El objetivo es practicar el uso correcto de los códigos de respuesta HTTP.

## Códigos utilizados

| Código | Significado           |
| ------ | --------------------- |
| 200    | Solicitud correcta    |
| 201    | Recurso creado        |
| 400    | Datos incorrectos     |
| 404    | Recurso no encontrado |

## Instalación

```bash
npm install
```

## Ejecutar

```bash
npm run dev
```

Servidor:

```text
http://localhost:3000
```

## Pruebas

### Listar personajes

```text
GET /personajes
```

Respuesta: `200`

### Buscar personaje

```text
GET /personajes/1
```

Si existe: `200`.

Si no existe:

```text
GET /personajes/99
```

Respuesta: `404`.

### Crear personaje

```text
POST /personajes
```

Body:

```json
{
  "nombre": "Mago",
  "clase": "Hechicero"
}
```

Respuesta: `201`.

Si falta algún dato, responde `400`.

## Concepto aprendido

Una API no debe responder siempre con `200`. El código HTTP debe indicar qué ocurrió con la solicitud.
