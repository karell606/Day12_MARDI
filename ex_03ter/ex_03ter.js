let currentPage = 1;
 
async function fetch_planets() {
  const res = await fetch(`https://swapi.dev/api/planets/?page=${currentPage}`);
  const { results, previous, next } = await res.json();
  const filter = document.getElementById('filter-input').value.toLowerCase();
  document.getElementById('planet-list').innerHTML = results
    .filter(planet => planet.name.toLowerCase().includes(filter))
    .map(planet => `<li class="planet" data-url="${planet.url}">${planet.name}</li>`)
    .join('');
  document.getElementById('prev-button').disabled = !previous;
  document.getElementById('next-button').disabled = !next;
 
  document.querySelectorAll('.planet').forEach(item => item.onclick = () => fetch_planet_details(item.dataset.url));
}
 
async function fetch_planet_details(url) {
  const { name, diameter, climate, terrain, population, films, residents } = await (await fetch(url)).json();
  const filmNames = await Promise.all(films.map(f => fetch(f).then(r => r.json()).then(film => film.title)));
  const residentNames = await Promise.all(residents.map(r => fetch(r).then(res => res.json()).then(res => res.name)));
 
  document.getElementById('planet-list').innerHTML = `
<h2>${name}</h2><p>Diamètre: ${diameter}, Climat: ${climate}, Terrain: ${terrain}, Population: ${population}</p>
<h3>Films</h3><ul>${filmNames.map(f => `<li>${f}</li>`).join('')}</ul>
<h3>Résidents</h3><ul>${residentNames.length ? residentNames.map(r => `<li>${r}</li>`).join('') : '<li>Aucun résident</li>'}</ul>
<button onclick="fetch_planets()">Retour</button>
  `;
}
 
document.getElementById('prev-button').onclick = () => { currentPage--; fetch_planets(); };
document.getElementById('next-button').onclick = () => { currentPage++; fetch_planets(); };
document.getElementById('filter-input').oninput = fetch_planets;
 
fetch_planets();
