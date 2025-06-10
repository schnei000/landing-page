const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const resultsDiv = document.getElementById('results');
const loader = document.getElementById('loader');


const UNSPLASH_ACCESS_KEY = "YOUR_UNSPLASH_KEY"; 

searchBtn.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    searchDestination(query);
  }
});

function searchDestination(query) {
  resultsDiv.classList.remove("hidden");
  loader.style.display = "block";
  resultsDiv.innerHTML = `<div id="loader"> Chargement...</div>`;

  
  fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}&orientation=landscape&per_page=1`)
    .then(res => res.json())
    .then(photoData => {
      const photo = photoData.results[0];

      
      fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`)
        .then(res => res.json())
        .then(wikiData => {
          const description = wikiData.extract || "Pas de description trouvée.";
          const imageUrl = photo ? photo.urls.regular : null;
          const photographer = photo ? photo.user.name : "";

          resultsDiv.innerHTML = `
            <div class="card">
              <h2>${query}</h2>
              ${imageUrl ? `<img src="${imageUrl}" alt="${query}">` : "<p>Aucune image trouvée.</p>"}
              <p>${description}</p>
              ${photographer ? `<small> Photo par ${photographer} (Unsplash)</small>` : ""}
            </div>
          `;
        });
    })
    .catch(error => {
      console.error(error);
      resultsDiv.innerHTML = "<p>Erreur lors du chargement des données.</p>";
    });
}
