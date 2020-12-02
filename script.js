// setting up variables
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// setting up event listener for the events
btn.addEventListener("click", function(){
    //every time we click on the button we change the color of the body
    const randomNum = getRandomNum(); // envoking the function
    document.body.style.backgroundColor = colors[randomNum];
    color.textContent = colors[randomNum];
});

// setting up the function that will generate the random number from array
function getRandomNum(){
    return Math.floor(Math.random() * colors.length);
}