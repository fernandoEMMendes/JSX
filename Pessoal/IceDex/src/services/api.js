const BASE_URL = "https://pokeapi.co/api/v2/";

function detalhe(pokemon) {
  return fetch(`${BASE_URL}pokemon/${pokemon}`).then((res) => res.json());
}
//function detalhe2(abilities) {
//  return fetch(`${BASE_URL}pokemon/${pokemon}Ability`).then((res) => res.json())
//}

// abaixo é um codigo para fazer a verificação do react pular a proxima linha
// eslint-disable-next-line
export default {
  detalhe
  //detalhe2
}