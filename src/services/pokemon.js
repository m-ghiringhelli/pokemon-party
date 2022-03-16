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

export async function fetchByType(type) {
  const resp = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?type=${type}`);
  const data = await resp.json();
  return data.results;
}