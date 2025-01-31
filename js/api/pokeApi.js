window.fetchData = async function(pokemonName) {
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