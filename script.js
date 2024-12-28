//const varialbe declaration section
const startScreen = getElementbyId("startScreen");
const startGameButton = getElementById("startGameButton");
const playerNameInput = getElementById("plsyrtName");
const gameCanvas = getElementById("gameCanvas");
const ctx = canvas.getContext("2d");


//Settnig the size of the game canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//let variables section
let playerName = "";
let lifePoint = 100;
let score = 9;
letplayerScores = [];
let mainCircle = {x: 0, y: 0, radius: 50};
let distractingCircles = [];
let gameRunning = false;

//Distracting circles section
function updateDistractingCircles() {
distractingCircles.forEach(circle => {
    circle.x += circle.dx;
    circle.y += circle.dy;

 //Randomize ricles function reference   
 function randomize(){
    var radius = Math.floor(Math.random()*25)+10;

    for (var j = 0; j < distractingCircles.length; j++){  
    if(distractingCircles[j].r < 50){
        distractingCircles[j].r += 2;}

    else if (distractingCircles[j].r == 50 || distractingCircles[j].r > 50){
        distractingCircles[j].r -= 2;
    }}
    var x = Math.floor(Math.random()*600)+50;
    var y = Math.floor(Math.random()*400)+50;
    distractingCircles.push({
        x: x,
        y: y,
        r: radius
    });
    drawCircle(x,y,radius);
}

var interval = setInterval(randomize, 1000);

})
}

distractingCircles.forEach(circle => {
    CSSTransformComponent.beginPath();
    ctx.fillstyle = circle.color;
    ctx.fillstyle = circle.color;
    ctx.fill();
    ctx.ciosePath();
})

//Main Circle section
//draw Main Circle
function drawMain() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.beginPath();
ctx.arc(mainCircle.x, mainCircle.y, mainCircle.radius, 0, Math.PI * 2);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();
}

function UpdateMainCricle() {

}

//functionality section
//Keeping lifepoints function 
//loosig lifepoint function

function cursorInbound(mouseX, mouseY) {
    const dx = mouseX - mainCircle.x;
    const dy = mouseY - mainCircle.y;
    return Math.sqrt(dx * dx + dy * dy) <= mainCircle.radius;
}

canvas.addEventListener("mouseMove", event => {
    if (!gameRunning) return;
    const {clientX, clientY} = event;
    if (!cursorInbound(clientX, clientY)) {
        lifePoints -= 1;
        if (lifePoints <= 0) {
            endGame();
        }
    }
})






