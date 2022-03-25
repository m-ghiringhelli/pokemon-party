export async function fetchPokemon() {
  const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex?perPage=801');
  const data = await resp.json();
  return data.results;
}

export async function fetchByType(type, direction) {
  const params = new URLSearchParams();
  //if there's a type but it's not all, put type in search params
  if (type && type !== 'all') params.set('type', type);
  if (direction) {
    params.set('sort', 'pokemon');
    params.set('direction', direction);
  }

  const resp = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?perPage=801&${params.toString()}`);
  const data = await resp.json();
  return data.results;
}
//to populate dropdown options
export async function fetchPokemonTypes() {
  const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
  const data = await resp.json();
  return data.map((item) => item.type);
}
