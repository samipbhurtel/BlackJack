let sum = 0;
let cards = [];
let isAlive = false;
let hasBlackJack = false;

let cardsEl = document.getElementById("start-el");
let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");

function getRandomCard() {
  let randNum = Math.floor(Math.random() * 13) + 1;
  if (randNum > 10) {
    return 10;
  } else if (randNum === 1) {
    return 11;
  } else {
    return randNum;
  }
}
function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += " " + cards[i];
  }
  sumEl.textContent = "Sum: " + sum;

  if (sum < 21) {
    messageEl.textContent =
      "You're Point Is: " + sum + ". Would You Like To Draw a New Card?";
  } else if (sum === 21) {
    messageEl.textContent = "You've Got a BlackJack";
    hasBlackJack = true;
  } else {
    messageEl.textContent = "You're Out of the Game. Thank You For Playing";
    isAlive = false;
  }
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);

    renderGame();
  }
}
