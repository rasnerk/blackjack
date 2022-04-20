const cards = [
    { card: "A", suit: "Diamonds", value: [1,11], link: 'assets/imgs/Diamonds/ace-of-diamonds.webp' },
    { card: "A", suit: "Hearts", value: [1,11], link: 'assets/imgs/Hearts/ace-of-hearts.webp' },
    { card: "A", suit: "Spades", value: [1,11], link: 'assets/imgs/Spades/ace-of-spades.webp' },
    { card: "A", suit: "Clubs", value: [1,11], link: 'assets/imgs/Clubs/ace-of-clubs.webp' },
    { card: "2", suit: "Diamonds", value: 2, link: 'assets/imgs/Diamonds/two-of-diamonds.webp' },
    { card: "2", suit: "Hearts", value: 2, link: 'assets/imgs/Hearts/two-of-hearts.webp' },
    { card: "2", suit: "Spades", value: 2, link: 'assets/imgs/Spades/two-of-spades.webp' },
    { card: "2", suit: "Clubs", value: 2, link: 'assets/imgs/Clubs/two-of-clubs.webp' },
    { card: "3", suit: "Diamonds", value: 3, link: 'assets/imgs/Diamonds/three-of-diamonds.webp' },
    { card: "3", suit: "Hearts", value: 3, link: 'assets/imgs/Hearts/three-of-hearts.webp' },
    { card: "3", suit: "Spades", value: 3, link: 'assets/imgs/Spades/three-of-spades.webp' },
    { card: "3", suit: "Clubs", value: 3, link: 'assets/imgs/Clubs/three-of-clubs.webp' },
    { card: "4", suit: "Diamonds", value: 4, link: 'assets/imgs/Diamonds/four-of-diamonds.webp' },
    { card: "4", suit: "Hearts", value: 4, link: 'assets/imgs/Hearts/four-of-hearts.webp' },
    { card: "4", suit: "Spades", value: 4, link: 'assets/imgs/Spades/four-of-spades.webp' },
    { card: "4", suit: "Clubs", value: 4, link: 'assets/imgs/Clubs/four-of-clubs.webp' },
    { card: "5", suit: "Diamonds", value: 5, link: 'assets/imgs/Diamonds/five-of-diamonds.webp' },
    { card: "5", suit: "Hearts", value: 5, link: 'assets/imgs/Hearts/five-of-hearts.webp' },
    { card: "5", suit: "Spades", value: 5, link: 'assets/imgs/Spades/five-of-spades.webp' },
    { card: "5", suit: "Clubs", value: 5, link: 'assets/imgs/Clubs/five-of-clubs.webp' },
    { card: "6", suit: "Diamonds", value: 6, link: 'assets/imgs/Diamonds/six-of-diamonds.webp' },
    { card: "6", suit: "Hearts", value: 6, link: 'assets/imgs/Hearts/six-of-hearts.webp' },
    { card: "6", suit: "Spades", value: 6, link: 'assets/imgs/Spades/six-of-spades.webp' },
    { card: "6", suit: "Clubs", value: 6, link: 'assets/imgs/Clubs/six-of-clubs.webp' },
    { card: "7", suit: "Diamonds", value: 7, link: 'assets/imgs/Diamonds/seven-of-diamonds.webp' },
    { card: "7", suit: "Hearts", value: 7, link: 'assets/imgs/Hearts/seven-of-hearts.webp' },
    { card: "7", suit: "Spades", value: 7, link: 'assets/imgs/Spades/seven-of-spades.webp' },
    { card: "7", suit: "Clubs", value: 7, link: 'assets/imgs/Clubs/seven-of-clubs.webp' },
    { card: "8", suit: "Diamonds", value: 8, link: 'assets/imgs/Diamonds/eight-of-diamonds.webp' },
    { card: "8", suit: "Hearts", value: 8, link: 'assets/imgs/Hearts/eight-of-hearts.webp' },
    { card: "8", suit: "Spades", value: 8, link: 'assets/imgs/Spades/eight-of-spades.webp' },
    { card: "8", suit: "Clubs", value: 8, link: 'assets/imgs/Clubs/eight-of-clubs.webp' },
    { card: "9", suit: "Diamonds", value: 9, link: 'assets/imgs/Diamonds/nine-of-diamonds.webp' },
    { card: "9", suit: "Hearts", value: 9, link: 'assets/imgs/Hearts/nine-of-hearts.webp' },
    { card: "9", suit: "Spades", value: 9, link: 'assets/imgs/Spades/nine-of-spades.webp' },
    { card: "9", suit: "Clubs", value: 9, link: 'assets/imgs/Clubs/nine-of-clubs.webp' },
    { card: "10", suit: "Diamonds", value: 10, link: 'assets/imgs/Diamonds/ten-of-diamonds.webp' },
    { card: "10", suit: "Hearts", value: 10, link: 'assets/imgs/Hearts/ten-of-hearts.webp' },
    { card: "10", suit: "Spades", value: 10, link: 'assets/imgs/Spades/ten-of-spades.webp' },
    { card: "10", suit: "Clubs", value: 10, link: 'assets/imgs/Clubs/ten-of-clubs.webp' },
    { card: "J", suit: "Diamonds", value: 10, link: 'assets/imgs/Diamonds/jack-of-diamonds.webp' },
    { card: "J", suit: "Hearts", value: 10, link: 'assets/imgs/Hearts/jack-of-hearts.webp' },
    { card: "J", suit: "Spades", value: 10, link: 'assets/imgs/Spades/jack-of-spades.webp' },
    { card: "J", suit: "Clubs", value: 10, link: 'assets/imgs/Clubs/jack-of-clubs.webp' },
    { card: "Q", suit: "Diamonds", value: 10, link: 'assets/imgs/Diamonds/queen-of-diamonds.webp' },
    { card: "Q", suit: "Hearts", value: 10, link: 'assets/imgs/Hearts/queen-of-hearts.webp' },
    { card: "Q", suit: "Spades", value: 10, link: 'assets/imgs/Spades/queen-of-spades.webp' },
    { card: "Q", suit: "Clubs", value: 10, link: 'assets/imgs/Clubs/queen-of-clubs.webp' },
    { card: "K", suit: "Diamonds", value: 10, link: 'assets/imgs/Diamonds/queen-of-diamonds.webp' },
    { card: "K", suit: "Hearts", value: 10, link: 'assets/imgs/Hearts/queen-of-hearts.webp' },
    { card: "K", suit: "Spades", value: 10, link: 'assets/imgs/Spades/queen-of-spades.webp' },
    { card: "K", suit: "Clubs", value: 10, link: 'assets/imgs/Clubs/queen-of-clubs.webp' },
]