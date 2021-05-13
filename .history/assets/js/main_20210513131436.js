//Colors array
//let colors = ['black','blue','yellow', 'white','brown'];

//get button
//let button = document.getElementById('changecolor');

//add Event for changing colors
//button.addEventListener('click', function(){

//add random color
//var randomColor = colors[Math.floor(Math.random() * colors.length)]
//let container = document.getElementById('game-box')

//  container.style.background = randomColor;
//})

//Card Options

document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'woman',
            img: 'assets/images/wonderwoman.png'
        },
        {
            name: 'woman',
            img: 'assets/images/wonderwoman.png'
        },
        {
            name: 'batman',
            img: 'assets/images/batman.png'
        },
        {
            name: 'batman',
            img: 'assets/images/batman.png'
        },
        {
            name: 'boxer',
            img: 'assets/images/boxer.png'
        },
        {
            name: 'boxer',
            img: 'assets/images/boxer.png'
        },
        {
            name: 'gadget',
            img: 'assets/images/gadget.png'
        },
        {
            name: 'gadget',
            img: 'assets/images/gadget.png'
        },
        {
            name: 'greenman',
            img: 'assets/images/greenman.png'
        },
        {
            name: 'greenman',
            img: 'assets/images/greenman.png'
        },
        {
            name: 'ninja',
            img: 'assets/images/ninja.png'
        },
        {
            name: 'ninja',
            img: 'assets/images/ninja.png'
        },

    ]


    const grid = document.querySelector('.grid')
    var cardsChosen = []
    var cardsChosenId = []

    // Game Board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            //card.setAttribute('src', cardArray[i]['img'])
            card.setAttribute('src', 'assets/images/lego.png')
            card.setAttribute('data-id', i)
            //card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }


    // cards matches

    // cards flip
    function flipcard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout (checkForMatch, 600)
        }
    }
    createBoard()
})
