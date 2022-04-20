const newGame = new BlackJack(cards);

document.querySelector('.balance').innerText = `$${newGame.playerBalance}`;
document.querySelector('.bet-amount').innerText = `$${newGame.playerBet}`;
// Click Events
newGame.addEvents();