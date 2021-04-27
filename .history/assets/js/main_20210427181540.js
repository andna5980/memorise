//Colors array
let colors = ['black','blue','yellow', 'white','brown', '#845EC2'];

//get button
let button = document.getElementById('changecolor');

//add Event
button.addEventListener('click', function(){
    
    //add random color
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container = document.getElementById('game-box')

    container.style.background = randomColor;
})



