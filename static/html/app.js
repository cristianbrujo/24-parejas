function flipCard() {
    if (lockboard) return;
    if (this === firstCard) return;

    this.classList.toggle('flip');

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockboard = true;

    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstCard.dataset.name === secondCard.dataset.name;

    isMatch ? disableCards() : unflipCards();
    // igualar, desactivar cartas : deshacer cartas
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unfliCards() {
    setTimeout(() => {

    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();

    }, 16);

}

function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockboard = false;
}



const cards = document.querySelectorAll('.memory-card');
cards.forEach(card => card.addEventListener('click', flipCard));

const cardsPareja = [
    { Card: "A", img: "A", class: "purple" },
    { Card: "B", img: "B", class: "amarillo" },
    { Card: "C", img: "C", class: "naranja"},
    { Card: "D", img: "D", class: "azul"},
    { Card: "A", img: "A", class: "purple" },
    { Card: "B", img: "B", class: "amarillo" },
    { Card: "C", img: "C", class: "naranja" },
    { Card: "D", img: "D", class: "azul" },
];


cards.forEach((card) => {
    var item = cardsPareja.pop()
    card.children[0].classList.add(item.class)
    card.innerHTML += item.Card
});



// cards.
/*
let firstCard = null;
let SecondCard = null;
let lockBoard = false;

const gameBoard = document.getElementById(" game-board");
cardsPareja.sort(() => 0.5 - Math.random());

cardsPareja.forEach((card, index));
const cardElement = document.createElement("div");
cardElement.classList.add("card");
cardElement.dataset.name = card.name;
cardElement.dataset.id = index;
cardElement.innerHTML = `
    <div class = "front">${card.img}</div>
    <div class = "back">?</div>
    `;
cardElement.addEventListener
*/
