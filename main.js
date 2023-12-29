async function fetchMovies() {
  const response = await fetch(
    "https://anschoolacc.github.io/Uppgift-2-En-biograf-sajt/movies.JSON"
  );
  return await response.json();
}

const movies = await fetchMovies();

console.log(movies);

if (window.location.pathname.includes("movies")) {
  const container = document.querySelector(".allMovies");
  renderMovies(container);
}

function renderMovies(container) {
  movies.forEach((movie) => {
    const movieCard = createMovie(movie);
    container.appendChild(movieCard);
  });
}

function createMovie(movie) {
  const movieTemplate = document.querySelector(".movieTemplate");
  const temp = movieTemplate.content.cloneNode(true);
  const card = temp.querySelector(".movieTemplate__card");
  const cardCover = temp.querySelector(".movieTemplate__cover");
  const cardImg = temp.querySelector(".movieTemplate__img");
  const cardTitle = temp.querySelector(".movieTemplate__title");
  const cardAge = temp.querySelector(".movieTemplate__ageLimit");
  const cardCat = temp.querySelector(".movieTemplate__category");
  const cardDes = temp.querySelector(".movieTemplate__description");
  const cardBtn = temp.querySelector(".movieTemplate__button");
  card.id = movie.id;
  cardTitle.innerText = movie.title;
  cardAge.innerText = movie.age_limit;
  cardCat.innerText = movie.category;
  cardDes.innerText = movie.description;
  cardImg.style.backgroundImage = `url(${movie.image})`;
  cardCover.style.backgroundImage = `url(${movie.image})`;
  return temp;
}

const btnsOpenModal = document.querySelectorAll(".movieTemplate__button");
const btnCloseModal = document.querySelector(".modal__close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const cancelBtn = document.querySelector(".modal__btns__cancel");
const btnBook = document.querySelector(".modal__btns__book");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  document.querySelector(".modal__offLine").style.color = "#464646";
};

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);


const offlineMessage = function () {
  console.log("Offline message function is running");
  document.querySelector(".modal__offLine").style.color = "#800020";
};

btnBook.addEventListener("click", offlineMessage);

cancelBtn.addEventListener("click", closeModal);

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);
