let id = 1;

export function guardarDibujo(nombre, estilo) {
  return {
    id: id++,
    nombre,
    estilo
  };
}