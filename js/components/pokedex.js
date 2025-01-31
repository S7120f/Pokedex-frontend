window.allCatchedPokemon = async function (myPokemon) {
  console.log("Data i allCatchedPokemon, ", myPokemon);
  // Tömmer div:en
  pokedexDiv.innerHTML = "";

  for (const pokemon of myPokemon) {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.pokemonId}`
      );
      const pokeData = await response.json();

      const types = pokeData.types.map((type) => type.type.name).join(", ");

      pokedexDiv.innerHTML += `
            <div>
            <h2>Namn: ${pokeData.name.toUpperCase()}</h2>
            <img src="${pokeData.sprites.front_default}" alt="${pokeData.name}">
            <p>Pokedex-nummer: #${pokeData.id}</P>
            <p>Type: ${types}</p>
            <p>Anteckning: ${pokemon.note || "Ingen anteckning"} </p>
            <button onclick="handleNote(${
              pokemon.id
            })">Hantera anteckning</button>
            <button onclick="deletePokemon(${pokemon.id})">Radera från samling</button>
            </div>
        `;
    } catch (error) {
      console.log(error);
    }
  }
};

function deletePokemon(id) {
  fetch(`http://localhost:8080/api/pokemon/${id}`, {
    method: `DELETE`,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(() => fetchIntApi())
    .catch((error) => console.log(`Fel vid radering:`, error));
}

window.handleNote = function (pokemonId) {
  const action = prompt(
    "Vad vill du göra med anteckningen? - Välj ett alternativ\n" +
      "1. Skapa ny anteckning\n" +
      // "2. Uppdatera anteckning\n" +
      "2. Radera anteckning"
  );

  if (action === "1") {
    const newNote = prompt("Skriv din anteckning");
    if (newNote) {
      fetch(`http://localhost:8080/api/pokemon/${pokemonId}/note`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newNote),
      })
        .then(() => fetchIntApi())
        .catch((error) => console.log(`Fel vid skapad note:`, error));
    }
  } else if (action === "2") {
    fetch(`http://localhost:8080/api/pokemon/${pokemonId}/note`, {
      method: `DELETE`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        alert("Anteckning raderad!");
        fetchIntApi();
    })
      .catch((error) => console.log(`Fel vid radering:`, error));
  }
};
