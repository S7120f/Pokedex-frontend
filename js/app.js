// hämta mitt HTML-Element
const pokemonInput = document.getElementById("pokemonInput");
const searchBtn = document.getElementById("searchBtn");
const resultDiv = document.getElementById("result");

// lägg till event listener på knappen
searchBtn.addEventListener("click", () => {
  // hämta värdet från input-fältet
  const pokemonName = pokemonInput.value.toLowerCase();
  //Anropa sökfunktion
  fetchData(pokemonName);
});

async function fetchData(pokemonName) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    console.log(data);

    //visa data på sidan
    displayPokemon(data);

    // resultDiv.innerHTML += `<h1>${data.name}</h1>`;
  } catch (error) {
    console.error(error);
    resultDiv.innerHTML ="Pokemon not found!"
  }
}

function displayPokemon(pokemon) {

    // mappar types pga av det är en array
    const types = pokemon.types.map(type => type.type.name).join(', ');

    resultDiv.innerHTML = `
    <h2>Namn: ${pokemon.name.toUpperCase()}</h2>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <p>Pokedex-nummer: #${pokemon.id}</P>
    <p>Type: ${types}</p>

    `;
}
