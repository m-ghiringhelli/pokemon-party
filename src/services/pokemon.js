export async function fetchPokemon() {
  const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
  const data = await resp.json();
  return data.results;
}

export async function fetchPokemonTypes() {
  const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
  const data = await resp.json();
  return data.map((item) => item.type);
}

export async function fetchByType(type, direction) {
  const params = new URLSearchParams();

  if (type) params.set('type', type);
  if (direction) {
    params.set('sort', 'pokemon');
    params.set('direction', direction);
  }
  
  const resp = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`);
  const data = await resp.json();
  return data.results;
}

// export async function fetchAlphabetical(direction) {
//   const resp = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=pokemon&direction=${direction}`);
//   const data = await resp.json();
//   return data.results;
// }