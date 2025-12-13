const results = document.getElementById("results");
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");

const API_BASE = "https://api.jikan.moe/v4/anime";

loadAnime(API_BASE);

function loadAnime(url) {
  results.innerHTML = "<p class='loading'>Loading...</p>";

  fetch(url)
    .then(res => res.json())
    .then(data => {
      renderAnimeList(data.data);
    })
    .catch(err => {
      console.error(err);
      results.innerHTML = "<p>Error loading anime</p>";
    });
}

function renderAnimeList(list) {
  results.innerHTML = "";

  list.forEach(anime => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${anime.images.jpg.image_url}">
      <p class="title">${anime.title}</p>
    `;

    results.appendChild(card);
  });
}

searchBtn.addEventListener("click", () => {
  const keyword = searchInput.value.trim();
  if (!keyword) return;

  loadAnime(`${API_BASE}?q=${keyword}`);
});

fetch("https://api.jikan.moe/v4/anime")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));