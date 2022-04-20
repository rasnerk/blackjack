class BlackJack {
    constructor (cards) {
        this.cards = cards;
        this.playerBalance = 1000;
        this.playerBet = 25;
        this.handsDealt = 0;
        this.playersHand = [];
        this.dealersHand = [];
        this.availableCards = []
        this.gameResult = false;
        this.gameInMotion = false;
    }

    // --- Game Manipulation Methods --- //
    startGame () {
        // -- Make sure player is eligible to start game -- //
        if (this.playerBet > this.playerBalance) {
            this.displayMessage('Cannot bet more than balance!','push');
            return;
        }
        // let checkEligible = this.isEligible();
        // if (checkEligible.eligible === false) {
        //     this.displayMessage(checkEligible.message);
        //     return;
        // }
        
        // -- Does the game need to be reset? -- //
        if (this.handsDealt === 0) this.shuffleDeck();
        if (this.handsDealt > 24) {
            this.displayMessage('Reshuffling Cards...','push')
            this.resetGame(true);
        }

        // -- Reset in Game Variables -- //
        this.resetGame();

        // -- Deal Cards & Start Game -- //
        this.gameInMotion = true;
        this.dealCards();

    }

    endGame () {}

    resetGame (type) {
        if (type) {
            this.shuffleDeck();
            this.handsDealt = 0;
        }
        this.playersHand = [];
        this.dealersHand = [];
        this.gameResult = false;
        document.querySelector('.players-hand').innerHTML = '';
        document.querySelector('.dealers-hand').innerHTML = '';
    }

    isEligible () {
        // -- What makes a player uneligible? -- //
        // Betting more than they can
        // Doubling more than they can ^
        // might not need this
        if (this.playerBet > this.playerBalance) return { eligible: false, message: "Cannot bet more than balance!" };

    }

    // --- Card Manipulation Methods --- //
    dealCards () {
        // -- Running tally of total hands dealt -- //
        this.handsDealt ++;

        // -- Players Cards -- //
        let playersCards = [ this.randomCardSelector(), this.randomCardSelector() ];

        // -- Dealers Cards -- //
        let dealersCards = [ this.randomCardSelector(), this.randomCardSelector() ];

        // -- Update Scores -- //
        playersCards.forEach( card => this.updateScore(card) )
        dealersCards.forEach( card => this.updateScore(card) )

        // -- Create & Append Card Images -- //
        playersCards.map( card => this.createCard(card) ).forEach( card => document.querySelector('.players-hand').append(card) );
        dealersCards.map( (card,i) => i === 1 ? this.createCard(card,'dealers-hidden-card') : this.createCard(card) ).forEach( card => document.querySelector('.dealers-hand').append(card) );
        // -- Illusion of dealers hidden card -- //
        let backOfCard = this.createCard({link: 'assets/imgs/back-of-card.jpg'})
        backOfCard.classList.add('back-of-card')
        document.querySelector('.dealers-hand').append(backOfCard)
    }

    shuffleDeck () {
        this.availableCards = [];
        let temp = []
        for (let i=0; i<6; i++) {
            temp.push(this.cards);
        }
        for (let i=0; i<temp.length; i++) {
            this.availableCards = this.availableCards.concat(temp[i])
        }
    }

    randomCardSelector () {
        let selectedCardIndex = Math.floor(Math.random() * ( (this.availableCards.length - 1) - 0) )
        let selectedCard = this.availableCards[selectedCardIndex];
        // Remove Card from available cards as its now been used
        this.availableCards.splice(selectedCardIndex, 1);
        
        return selectedCard;
    }

    createCard (obj,special) {
        let card = document.createElement('img');
        card.src = obj.link;
        card.value = obj.value;
        if (special) card.classList.add(special)
        return card;
    }

    // --- Player Manipulated Event Methods --- //
    addEvents () {
        document.querySelector('.deal').addEventListener("click", () => this.startGame() )
        document.querySelector('.hit').addEventListener("click", () => this.hit() )
        document.querySelector('.stand').addEventListener('click', () => this.stand() )
        document.querySelector(".double").addEventListener('click', () => this.double() )
        document.querySelector(".split").addEventListener('click', () => this.split() )
        document.querySelector(".increase-bet").addEventListener('click', () => this.increaseBet() )
        document.querySelector(".decrease-bet").addEventListener('click', () => this.decreaseBet() )
    }

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