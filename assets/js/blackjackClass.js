class BlackJack {
    constructor (cards) {
        this.cards = cards;
        this.playerBalance = 1000;
        this.playerBet = 25;
    }

    // --- Game Manipulation Methods --- //
    startGame () {}

    endGame () {}

    resetGame () {}

    // --- Card Manipulation Methods --- //
    dealCards () {}

    shuffleDeck () {}

    randomCardSelector () {}

    createCard () {}

    // --- Player Manipulated Event Methods --- //
    addEvents () {}

    hit () {}

    stand () {}

    double () {}

    split () {}

    bust () {}

    displayMessage (message,type) {
        let el = document.querySelector('.message');
        let classes = ['win','lose','push'];

        el.innerText = message;
        classes.forEach( c => el.classList.remove(c))
        el.classList.add(type);
        el.style.display = 'block';
        document.querySelector('main').classList.add('displaying-message');
        
        setTimeout( () => {
            el.style.display = 'none';
            document.querySelector('main').classList.remove('displaying-message');
        },2500)

    }

    // --- Scoring Methods --- //

    updateScore () {}

    // --- Changing Bet Methods --- //

    increaseBet () {}

    decreaseBet () {}
}