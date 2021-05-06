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
        img: 'images/wonderwoman.png' 
    },
    {
        name: 'woman',
        img: 'images/wonderwoman.png' 
    },
    {
        name: 'batman',
        img: 'images/batman.png'
    },
    {
        name: 'batman',
        img: 'images/batman.png'
    },
    {
        name: 'boxer',
        img: 'images/boxer.png'
    },
    {
        name: 'boxer',
        img: 'images/boxer.png'
    },
    {
        name: 'gadget',
        img: 'images/gadget.png'
    },
    {
        name: 'gadget',
        img: 'images/gadget.png'
    },
    {
        name: 'greenman',
        img: 'images/greenman.png'
    },
    {
        name: 'greenman',
        img: 'images/greenman.png'
    },
    {
        name: 'ninja',
        img: 'images/ninja.png'
    },
    {
        name: 'ninja',
        img: 'images/ninja.png'
    },

]      

cardArray.sort(() => 0.5 - Math.random())

//Board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('imag')
        card.setAttribute('src', '../images/lego.png')
        card.setAttribute('data-id', i)
        //card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}

createBoard()






const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')

