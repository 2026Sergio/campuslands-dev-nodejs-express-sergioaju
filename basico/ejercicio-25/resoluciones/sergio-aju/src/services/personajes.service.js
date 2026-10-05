const personajes = [
  {
    id: 1,
    nombre: 'Arthas',
    clase: 'Guerrero'
  },
  {
    id: 2,
    nombre: 'Luna',
    clase: 'Maga'
  }
];

export function listarPersonajes() {
  return personajes;
}

export function buscarPersonaje(id) {
  return personajes.find(p => p.id === Number(id));
}

export function crearPersonaje(nombre, clase) {
  const personaje = {
    id: personajes.length + 1,
    nombre,
    clase
  };

  personajes.push(personaje);

  return personaje;
}