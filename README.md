# Pokédex Frontend

En webbapplikation för att söka, fånga och hantera Pokémon med hjälp av PokéAPI och ett eget backend-API.

## Förutsättningar

- En webbläsare
- En lokal webbserver (t.ex. Live Server i VS Code)
- Backend-API:et måste vara igång på `localhost:8080`

## Installation och start

1. Klona projektet till din dator
2. Öppna projektet i VS Code
3. Installera tillägget "Live Server" om du inte redan har det
4. Högerklicka på `index.html` och välj "Open with Live Server"
   - Sidan bör öppnas på `http://127.0.0.1:5500`

## Funktioner

- Sök efter Pokémon med namn
- Fånga Pokémon och spara i din egen Pokédex
- Visa alla fångade Pokémon
- Lägg till, uppdatera och ta bort anteckningar för varje fångad Pokémon
- Ta bort Pokémon från din samling

## Projektstruktur
js/
│ |----api/
│ │  databaseApi.js # Hantering av anrop till backend
│ │  pokeApi.js # Hantering av anrop till PokéAPI
│ |----components/
│ │  |pokedex.js # Hantering av Pokédex-vyn
│ │  |pokemonDisplay.js # Visning av sökresultat
|
|-|---app.js # Huvudapplikation
|
│ 
|----index.html

## Användning

1. Använd sökfältet för att söka efter en Pokémon
2. Klicka på "Fånga" för att lägga till Pokémon i din samling
3. Använd "Visa Pokedex" för att se dina fångade Pokémon
4. Hantera anteckningar och ta bort Pokémon via knapparna i Pokédex-vyn