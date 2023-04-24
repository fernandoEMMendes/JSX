const BASE_URL = "https://pokeapi.co/api/v2/";

function detalhe(pokemon) {
  return fetch(`${BASE_URL}pokemon/${pokemon}`).then((res) => res.json());
}

export default {
  detalhe
}