//Colors array
let colors = ['black','blue','yellow', 'white','brown'];

//get button
let button = document.getElementById('changecolor');

//add Event
button.addEventListener('click', function(){
    
    //add random color
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container = document.getElementbyId('game-box');

    container.style.background = randomColor;
})

