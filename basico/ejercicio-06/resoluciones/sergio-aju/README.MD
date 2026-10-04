# BASICO 06 - path y rutas seguras

## Descripción

Ejercicio básico para practicar el módulo `path` de Node.js.

Se utiliza `path.join()` para construir la ruta de un archivo de motos.

## Instalación

```bash
npm install
```

## Ejecutar

```bash
npm run dev
```

## Rutas

### GET /health

Comprueba que el servidor funciona.

### GET /motos

Lee el archivo `data/motos.json`.

```text
http://localhost:3000/motos
```

## Concepto

Se utiliza:

```js
path.resolve()
path.join()
```

para trabajar con rutas de archivos.
