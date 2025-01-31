// hämta mitt HTML-Element
const pokemonInput = document.getElementById("pokemonInput");
const searchBtn = document.getElementById("searchBtn");
const resultDiv = document.getElementById("result");
const pokedexDiv = document.getElementById("pokedexDiv");
const showPokedex = document.getElementById("showPokedex");


// lägg till en variabel för att hålla koll på om pokedex är öppen eller stängd
let isPokedexOpen = false;

// lägg till event listener på knappen
searchBtn.addEventListener("click", () => {
  // hämta värdet från input-fältet
  const pokemonName = pokemonInput.value.toLowerCase();
  //Anropa sökfunktion
  fetchData(pokemonName);
});

showPokedex.addEventListener("click", () => {
  if (!isPokedexOpen) {
    // om pokedex är stängd, öppna den
    console.log("Öppnar pokedex");
    showPokedex.innerText = "Stäng Pokedex";
    fetchIntApi();
    isPokedexOpen = true;
} else {
    // om pokedex är öppen
    console.log("Stäng Pokedex");
    showPokedex.innerText = "Visa pokedex";
    pokedexDiv.innerHTML = "";
    isPokedexOpen = false;
}
});

// .then(() => fetchIntApi()) // uppdaterar listan efter borttagning
// .catch(error => console(`Fel vid radering`, error));

