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
        this.gameControls = [".hit", ".stand", ".split", ".double"]
    }

    // --- Game Manipulation Methods --- //
    startGame () {
        // -- Make sure player is eligible to start game -- //
        if (this.playerBet > this.playerBalance) {
            this.displayMessage('Cannot bet more than balance!','push');
            return;
        }
        
        // -- Does the game need to be reset? -- //
        if (this.handsDealt === 0) this.shuffleDeck();
        // -- I don't like this but i need to disable the buttons or funky shtuff happens -- //
        if (this.handsDealt > 24) {
            this.displayMessage('Reshuffling Cards...','push')
            this.resetGame(true);
            this.gameInMotion = true;
            this.gameControls.forEach( (control) => document.querySelector(control).disabled = true )
            document.querySelector('.deal').disabled = true;
            setTimeout(() => {
                this.dealCards();
                this.gameControls.forEach( (control) => document.querySelector(control).disabled = false )
                document.querySelector('.deal').disabled = false;
            },3000)
            return;
        }

        // -- Reset in Game Variables -- //
        this.resetGame();

        // -- Deal Cards & Start Game -- //
        this.gameInMotion = true;
        this.dealCards();

    }

    endGame () {
        this.gameControls.forEach( control => document.querySelector(control).disabled = true )
    }

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
        this.gameControls.forEach( control => document.querySelector(control).disabled = false );
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
        console.log('player')
        playersCards.forEach( card => this.updateScore(card.value,this.playersHand) )
        console.log('dealer')
        dealersCards.forEach( card => this.updateScore(card.value,this.dealersHand) )

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

    hit () {
        let playersCard = this.randomCardSelector();
        document.querySelector('.players-hand').append( this.createCard(playersCard) )
        this.updateScore(playersCard.value,this.playersHand);
        if (this.playersHand[0] > 21) {
            this.displayMessage("Player Busted!", "lose");
            setTimeout( () => {
                this.endGame();
            }, 500)
        }
        // Not yet ^^
    }

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

    updateScore (value,player) {
        // If the card drawn is an ace and the player does NOT have any other cards yet
        if (typeof value === 'object' && player.length === 0) {
            player.push(value[0],value[1])
        } 
        // If the card drawn is an ace and the player has one non ace card
        else if(typeof value === 'object' && player.length === 1) {
            let x = player[0];
            player = [];
            value.forEach( (val) => {
                player.push(x+val)
            })
        } 
        // If the card drawn is an ace and the player already has an ace
        else if (typeof value === 'object' && player.length > 1) {
            player[0] += value[0];
            player[1] += value[0];
        } 
        // If the card drawn is NOT an ace and the player already has an ace
        else if (typeof value !== 'object' && player.length > 1) {
            let x1 = player[0];
            let x2 = player[1];
            player = [];
            player.push(x1+value);
            player.push(x2+value)
        } 
        // If the card drawn is NOT an ace and the player does NOT have an ace BUT has a card
        else if (typeof value !== 'object' && player.length === 1) {
            player[0] += value;
        }
        // If the card drawn is NOT an ace and the player does NOT have any cards 
        else {
            player.push(value)
        }
        // ... wow what a shit show
    }

    // --- Changing Bet Methods --- //

    increaseBet () {}

    decreaseBet () {}
}