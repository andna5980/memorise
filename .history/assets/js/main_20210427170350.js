//Colors array
let colors = ['black','blue','yellow', 'white','brown'];

//get button
let button = document.getElementById('#changecolor');

//add Event
changecolor.addEventListener('click', function(){
    
    //add random color
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let gameAreaBox = document.getElementsByClassName('.game-area-box');

    gameAreaBox.style.background = randomColor;
})

