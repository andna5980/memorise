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
            img: 'assets/images/robin.png'
        },
        {
            name: 'ninja',
            img: 'assets/images/robin.png'
        },
        {
            name: 'lego',
            img: 'assets/images/legob&w.png'
        },
        {
            name: 'lego',
            img: 'assets/images/legob&w.png'
        },

    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsMatched = []

    // Game Board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            //card.setAttribute('src', cardArray[i]['img'])
            card.setAttribute('src', 'assets/images/lego.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }


    // cards matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId === optionTwoId) {
            cards[optionOneId].setAttribute('src', 'assets/images/lego.png')
            cards[optionTwoId].setAttribute('src', 'assets/images/lego.png')
            alert('You selected the same image, try again.')
        }

        else if (cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].setAttribute('src', 'assets/images/white.png')
            cards[optionTwoId].setAttribute('src', 'assets/images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsMatched.push(cardsChosen)
            alert('Cards Matched !!')
        } else {
            cards[optionOneId].setAttribute('src', 'assets/images/lego.png')
            cards[optionTwoId].setAttribute('src', 'assets/images/lego.png')
            alert('Not this time, keep trying !!')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsMatched.length
        if (cardsMatched.length === cardArray.length/2) {
            resultDisplay.textContent = ' Well done you found all the pairs'
        }
    }

    // cards flip
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout (checkForMatch, 500)
        }
    }
    createBoard()
})
