const board = document.getElementById("board");
const movesDisplay = document.getElementById("moves");

let moves = 0;
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedPairs = 0;

// 8 Bilder = 8 Paare = 16 Karten
const images = [
    "bilder/bilder1.jpg",
    "bilder/bilder2.jpg",
    "bilder/bilder3.jpg",
    "bilder/bilder4.jpg",
    "bilder/bilder5.jpg",
    "bilder/bilder6.jpg",
    "bilder/bilder7.jpg",
    "bilder/bilder8.jpg"
];

let cards = [...images, ...images];

cards.sort(() => Math.random() - 0.5);

cards.forEach(image => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.image = image;

    card.innerHTML = `
        <div class="front"></div>
        <img class="back" src="${image}">
    `;

    card.addEventListener("click", flipCard);
    board.appendChild(card);
});

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    moves++;
    movesDisplay.textContent = moves;

    checkMatch();
}

function checkMatch() {
    const match =
        firstCard.dataset.image === secondCard.dataset.image;

    if (match) {
        disableCards();
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");

    matchedPairs++;

    if (matchedPairs === 8) {
        setTimeout(() => {
            alert(`Gewonnen! Du hast ${moves} Züge gebraucht.`);
        }, 300);
    }

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        resetBoard();
    }, 1000);
}

function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
} 
