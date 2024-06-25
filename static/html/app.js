function flipCard() {
    this.classList.toggle('flip');
}

const cards = document.querySelectorAll('.memory-card');
cards.forEach(card => card.addEventListener('click', flipCard));

const cardsPareja = [
    { Card: "A", img: "A", class: "purple" },
    { Card: "B", img: "B", class: "amarillo" },
    { Card: "C", img: "C" },
    { Card: "D", img: "D" },
    { Card: "A", img: "A", class: "purple" },
    { Card: "B", img: "B", class: "amarillo" },
    { Card: "C", img: "C" },
    { Card: "D", img: "D" },
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
