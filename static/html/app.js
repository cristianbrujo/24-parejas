let lockboard = false   // Bloqueo de Tablero
let firstcard = null
let secondcard = null
let matches = 0;         //Partidos
let gamesWon = 0;        //Juegos Ganados
let timer;               // Tiempo
let seconds = 0;         // Segundos
let tiemporeaccion = 500 // Milisegundos

function flipcard() {    //Controla la lógica de voltear las cartas y verifica coincidencias.
    if (lockboard) return;
    if (this === firstcard) return;

    this.classList.toggle('flip');

    if (!firstcard) {
        firstcard = this;
        return;
    }

    secondcard = this;
    lockboard = true;

    checkForMatch();  //Comprobar si hay coincidencia
}

function checkForMatch() {
    if (firstcard.dataset.name === undefined) {alert("error firstcard name undefined")}
    if (secondcard.dataset.name === undefined) {alert("error firstcard name undefined")}

    const isMatch = firstcard.dataset.name === secondcard.dataset.name;
    isMatch ? disablecards() : unflipcards();
    // igualar, desactivar cartas : deshacer cartas
}

function disablecards() {     //Deshabilita las cartas si coinciden y verifica si se ha ganado la partida.
    firstcard.removeEventListener('click', flipcard);
    secondcard.removeEventListener('click', flipcard);

    resetBoard();
}

function unflipcards() {    //Voltea de nuevo las cartas si no coinciden.
    setTimeout(() => {     // Establecer tiempo espera.
        firstcard.classList.remove('flip');
        secondcard.classList.remove('flip');
        resetBoard();
    }, tiemporeaccion);

}

function resetBoard() {
    [firstcard, secondcard] = [null, null];
    lockboard = false;
}

const cardsPareja = [
    { card: "A", class: "purple" },
    { card: "A", class: "purple" },
    { card: "B", class: "amarillo" },
    { card: "B", class: "amarillo" },
    { card: "C", class: "naranja" },
    { card: "C", class: "naranja" },
    { card: "D", class: "azul" },
    { card: "D", class: "azul" },
    { card: "E", class: "rojo" },
    { card: "E", class: "rojo" },
    { card: "F", class: "verde" },
    { card: "F", class: "verde" },
    { card: "G", class: "gris" },
    { card: "G", class: "gris" },
    { card: "H", class: "rosa" },
    { card: "H", class: "rosa" },
];

document.querySelectorAll('.memory-card').forEach((card) => {

    card.addEventListener('click', flipcard)

    var item = cardsPareja.pop()
    if (item == undefined) return
    card.children[0].classList.add(item.class)
    card.innerHTML += item.card
});
