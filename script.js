const startScreen = document.getElementById("startScreen");
const startGameButton = document.getElementById("startGameButton");
const playerNameInput = document.getElementById("playerName");
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let playerName = "";
let lifePoints = 100;
let score = 0;
let playerScores = [];

 let mainCircle = []; //{ x: 0, y: 0, radius: 50 };
let distractingCircles = [];
let gameRunning = false;

function gameLoop() {
    if (!gameRunning) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawMainCircle();
    updateDistractingCircles();
    requestAnimationFrame(gameLoop);
}
//start button
startGameButton.addEventListener("click", () => {
    playerName = playerNameInput.value.trim();
    if (!playerName) {
        alert("Enter Name To Start");
        return;
    }
//game initialization
    startScreen.style.display;
    lifePoints = 100;
    score = 0;
    gameRunning = true;
    randomizeDistractingCircles();
    updateMainCircle();
    setInterval(updateMainCircle, 2000);
    gameLoop();
});


//distraaction backgroun section
function updateDistractingCircles() {
    distractingCircles.forEach(circle => {
        circle.x += circle.dx;
        circle.y += circle.dy;

        if (circle.x < circle.radius || circle.x > canvas.width - circle.radius) circle.dx *= -1;
        if (circle.y < circle.radius || circle.y > canvas.height - circle.radius) circle.dy *= -1;

        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = circle.color;
        ctx.fill();
        ctx.closePath();
    });
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomizeDistractingCircles() {
    distractingCircles = [];
    for (let i = 0; i < 2000; i++) {
        distractingCircles.push({
            x: getRandomInt(50, canvas.width - 50),
            y: getRandomInt(50, canvas.height - 50),
            radius: getRandomInt(10, 25),
            dx: getRandomInt(-2, 2),
            dy: getRandomInt(-2, 2),
            color: `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`
        });
    }
}


//Main circle section
function drawMainCircle() {
    ctx.beginPath();
    ctx.arc(mainCircle.x, mainCircle.y, mainCircle.radius, 0, Math.PI * 2);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}

function updateMainCircle() {
    mainCircle.x = getRandomInt(mainCircle.radius, canvas.width - mainCircle.radius);
    mainCircle.y = getRandomInt(mainCircle.radius, canvas.height - mainCircle.radius);
}
//functionality section
//movmment with mouse
function cursorInbound(mouseX, mouseY) {
    const dx = mouseX - mainCircle.x;
    const dy = mouseY - mainCircle.y;
    return Math.sqrt(dx * dx + dy * dy) <= mainCircle.radius;
}
//alert for losingthe game
function endGame() {
    alert(`You have lost focus. Game Over! Your score: ${score}`);
    playerScores.push({ name: playerName, score });
    gameRunning = false;
    startScreen.style.display = "flex";
}
//intialize loss of liepoints and create dynamic forthe game
canvas.addEventListener("mousemove", event => {
    if (!gameRunning) return;
    const { clientX, clientY } = event;
    if (!cursorInbound(clientX, clientY)) {
        lifePoints -= 1;
        if (lifePoints <= 0) {
            endGame();
        }
    }
});

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
