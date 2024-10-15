const res = await fetch(`https://swapi.dev/api/planets/?page=${currentPage}`);
  const data = await res.json();
  const planets = data.results;
  document.getElementById('planet-list').innerHTML = planets
    .filter(planet => planet.name.toLowerCase().includes(document.getElementById('filter-input').value.toLowerCase()))
    .map(planet => `<li class="planet">Nom: ${planet.name}, Diamètre: ${planet.diameter}, Climat: ${planet.climate}</li>`)
    .join('');
  document.getElementById('prev-button').disabled = !data.previous;
  document.getElementById('next-button').disabled = !data.next;
}
 
document.getElementById('prev-button').onclick = () => { currentPage--; fetch_planets(); };
document.getElementById('next-button').onclick = () => { currentPage++; fetch_planets(); };
document.getElementById('filter-input').oninput = fetch_planets;
 
fetch_planets();
