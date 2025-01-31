window.displayPokemon = async function(pokemon) {

    
    // mappar types pga av det är en array
    const types = pokemon.types.map(type => type.type.name).join(', ');

    resultDiv.innerHTML = `
    <h2>${pokemon.name.toUpperCase()}</h2>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <p>Pokedex-nummer: #${pokemon.id}</P>
    <p>Type: ${types}</p>
    <button onclick="catchPokemon(${pokemon.id})">Fånga</button> 
    `;
};

function catchPokemon(pokemonId){


    const newPokemon = {
        pokemonId: pokemonId,
        note: ""
    }

    fetch(`http://localhost:8080/api/pokemon`, {
        method: `POST`,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPokemon)
    })
    .then(() => {
        alert("Pokemon fångad!");
        if(isPokedexOpen) {
            fetchIntApi();
        }
    })
    .catch(error => console.log("Fel vid fångst:", error));

    resultDiv.innerHTML = '';


}