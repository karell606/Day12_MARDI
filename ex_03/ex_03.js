function display_planet_info(planet) {
    const planetItem = document.createElement('li');
    planetItem.textContent = `
      Nom: ${planet.name}
      Diamètre: ${planet.diameter}
      Climat: ${planet.climate}
      Terrain: ${planet.terrain}
      Population: ${planet.population}
    `;
   
    document.getElementById('planet-list').appendChild(planetItem);
  }
   
  const samplePlanet = {
    name: "Tatooine",
    diameter: "10465",
    climate: "arid",
    terrain: "desert",
    population: "200000"
  };
   
  display_planet_info(samplePlanet);
