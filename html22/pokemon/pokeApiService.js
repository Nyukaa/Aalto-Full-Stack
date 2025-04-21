const getPokemonName = async (id) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}/`,
);
const data = await response.json();
return data.name;
};

const getPokemonBaseHappiness = async (id) => {
const response = await fetch(
  `https://pokeapi.co/api/v2/pokemon-species/${id}/`,
);
const data = await response.json();
return data.base_happiness;
};

const getPokemonEvolutionChain = async (id) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/evolution-chain/${id}/`,
  );
  let data = (await response.json()).chain;
  const array = [];
  while (data && data.species){
    const pok = data.species.name;
    array.push(pok);
    data = data.evolves_to[0];
  };
  return array;
};

export { getPokemonBaseHappiness, getPokemonEvolutionChain, getPokemonName };