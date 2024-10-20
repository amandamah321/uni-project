const images = [
  "img-1.jpg",
  "img-2.jpg",
  "img-3.jpg",
  "img-4.jpg",
  "img-5.jpg",
  "img-6.jpg",
];

const cards = images.concat(images);
//const cards = [...images, ...images]; outra forma de duplicar o array

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.random() * (i + 1);

    [array[i], array[j]] = [array[i], array[j]];

    /*let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    faz a mesma coisa que a parte de cima
    */
  }
}

shuffle(cards);

const gameBoard = document.getElementById("game-board");

cards.forEach((image, i) => {
  const card = document.createElement("div");
  card.className = "memory-card";
  card.dataset.image = image;
  card.dataset.indice = i;
  card.addEventListener("click", flipCard);
  gameBoard.appendChild(card);
});

let flippedCards = [];
let matchedCards = [];

function flipCard(e) {
  const card = e.target;
  if (flippedCards.length < 2) {
    card.style.backgroundImage = `url("./assets/images/${card.dataset.image}")`;
    flippedCards.push(card);

    if (flippedCards.length == 2) {
      setTimeout(checkMatch, 500);
    }
  }
}

function checkMatch() {
  const card1 = flippedCards[0];
  const card2 = flippedCards[1];

  if (
    card1.dataset.image === card2.dataset.image &&
    card1.dataset.indice != card2.dataset.indice
  ) {
    matchedCards.push(card1, card2);

    if (matchedCards.length == cards.length) {
      alert("Game Over !");
    }
  } else {
    card1.style.backgroundImage = "";
    card2.style.backgroundImage = "";
  }

  flippedCards = [];
}

//
