// Seleção dos elementos da página
const scene = document.querySelector(".scene");
const lifeElement = document.getElementById("life");
const scoreElement = document.getElementById("score");

const menuScore = document.getElementById(`menu-score`);
const menuGameOver = document.getElementById(`menu-gameover`);

const buttonPlay = document.getElementById("btn-start");
const buttonPause = document.getElementById("btn-pause");
const buttonReset = document.getElementById("btn-reset");

const music = new Audio("../assets/missaoespaco.mp3");
const spaceship = document.getElementById("spaceship");
const shootShipSound = new Audio("../assets/tiro.mp3");

// Dimensões da cena e da nave
const sceneWidth = scene.offsetWidth;
const sceneHeight = scene.offsetHeight;
const shipWidth = spaceship.offsetWidth;
const shipHeight = spaceship.offsetHeight;

/// Variáveis de controle
let life = 100;
let score = 0;
let enemyLife = 5;
let pause = true;
let shooting = false;

let shipFrequency = 15;
let shotFrequency = 15;
let newShotFrequency = 50;
let enemyShipFrequency = 10;
let newEnemyShipFrequency = 2500;

const initialPositionX = (sceneWidth - shipWidth) / 2;
const initialPositionY = sceneHeight - shipHeight;
let positionX = initialPositionX;
let positionY = initialPositionY;
let directionX = 0;
let directionY = 0;

// Funções para criar elementos

const createElement = (tag, className) => { };

const createShots = () => { };

const createEnemyShip = () => { };

const createMagicalItems = () => { }

// Funções para alterar a direção do movimento da nave

const changeDirection = (event) => { };

const stopDirection = (event) => { };

const moveShip = () => { };

// Função para mover os tiros

const moveShots = () => { };

const handleShooting = (event) => { };

// Funções para mover naves inimigas e items magicos

const moveEnemyShips = () => { };

const moveMagicalItems = () => { };

// Função para verificar colisões

const checkHitTheTarget = () => { };

const checkEnemiesWhithBase = () => { };

const checkCollisionWithEnemies = () => { };

const checkGetMagicalItems = () => { };

// Funções de controle dos botões

const handleStart = (event) => { };

const handlePause = (event) => { };

const togglePause = (event) => { };

const handleReset = (event) => { };

// Função para definir o nível de desfoque dos elementos

const setElementsBlur = () => { };

// Funções de controle do fluxo do jogo

const loadGame = () => {
    if (pause) return;
    
    setInterval(moveShip, shipFrequency);

    setInterval(createShots, newShotFrequency);
    setInterval(moveShots, shotFrequency);
    setInterval(createEnemyShip, newEnemyShipFrequency);
    setInterval(moveEnemyShips, enemyShipFrequency);
    setIntervel(createMagicalItems, newMagicalItemsFrequency);
    setIntervel(moveMagicalItems, magicalItensFrequency);

    setInterval(checkHitTheTarget, 10);
    setInterval(checkEnemiesWhithBase, 10);
    setInterval(checkCollisionWithEnemies, 10);
    setInterval(checkGetMagicalItems, 10);

    music.play();
};

const gameOver = () => { };

const resetGame = () => {
    
};

// Escutadores de eventos

buttonPlay.addEventListener('click', handleStart);
buttonPause.addEventListener('click', togglePause);
buttonReset.addEventListener('click', handleReset);
document.addEventListener('keypress', handlePause);
document.addEventListener('keydown', handleShooting);
document.addEventListener('keyup', handleShooting);
document.addEventListener('keydown', changeDirection);
document.addEventListener('keyup', stopDirection);
