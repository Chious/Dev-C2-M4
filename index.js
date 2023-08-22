const BASE_URL = "https://webdev.alphacamp.io";
const INDEX_URL = BASE_URL + "/api/movies";
const POSTER_URL = BASE_URL + "/posters/";

const movies = [];
const dataPanel = document.querySelector("#data-panel");

console.log(dataPanel);

function renderMovieList(data) {
  data.forEach((element) => {
    let card = document.createElement("div");

    card.innerHTML = `<div class="col-sm-3">
        <div class="mb-2">
          <div class="card">
            <img
              src="${POSTER_URL + element.image}"
              class="card-img-top"
              alt="Movie Poster"
            />
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
            </div>
            <div class="card-footer">
              <button
                class="btn btn-primary btn-show-movie"
                data-bs-toggle="modal"
                data-bs-target="#movie-modal"
              >
                More
              </button>
              <button class="btn btn-info btn-add-favorite">+</button>
            </div>
          </div>
        </div>
      </div>`;

    dataPanel.appendChild(card);
  });
}

axios.get(INDEX_URL).then((response) => {
  movies.push(...response.data.results);
  console.log(movies);
  renderMovieList(movies);
});
