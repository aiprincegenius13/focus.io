//Varialbe declaration section
const startScreen = getElementbyId("startScreen");
const startGameButton = getElementById("startGameButton");
const playerNameInput = getElementById("plsyrtName");
const gameCanvas = getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let playerName = "";
let lifePoint = 100;
let score = 9;
letplayerScores = [];
let mainCircle = {x: 0, y: 0, radius: 50};
let distractingCircles = [];
let gameRunning = false;




