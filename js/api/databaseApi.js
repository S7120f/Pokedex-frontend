window.fetchIntApi = async function() {

    console.log("Fetching from API...");
  
    try {
      const response = await fetch(
        `http://localhost:8080/api/pokemon`
      );
  
      if (!response.ok) {
        throw new Error("Could not fetch from database");
      }
  
      const data = await response.json();
      console.log("Data från mitt API", data);
  
      allCatchedPokemon(data);
  
    } catch (error) {
      console.error(error);
      resultDiv.innerHTML = "Could not find any catched pokmeon";
    }
    
  }