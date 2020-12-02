// setting up variables
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// setting up event listener for the events
btn.addEventListener('click', function(){
    //defining the variable that holds "#"
    let hexColor = '#';
    // setting uo loop that goes 6 times
    for(let i = 0; i < 6; i++){
        hexColor = hexColor + hex[getRandomNum()];// envoking getRandomNum fucntion
    };
    // targeting both body and color
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

// setting up the function
function getRandomNum(){
    return Math.floor(Math.random() * hex.length);
}