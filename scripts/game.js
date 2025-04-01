let canvas;
let world;
let keyboard = new Keyboard();
let allow = false;
let audioList = [];
let gameIsRunning = false;

// function that loads when the website loads
function init() {
  canvas = document.getElementById("canvas");
  if (allow == true) {
    startGame();
  }
  if (allow == false) {
    addStartScreen();
  }
}

// makes the game to fullscreen
function fullscreenMode() {
  canvas.requestFullscreen();
}

function muteWebsite() {
  audioList.forEach((audio) => {
    audio.muted = !audio.muted; // Wechsel zwischen stumm und laut
  });
}

// creates the world class and starts the game
function startGame() {
  initLevel();
  gameIsRunning = true;
  canvas.removeAttribute("onclick");
  world = new World(canvas, keyboard);
}

// adds a startScreen without starting the game
function addStartScreen() {
  let ctx = canvas.getContext("2d");
  let image = new Image();
  (image.src = "img/9_intro_outro_screens/start/startscreen_1.png"),
    0,
    0,
    720,
    480;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  };
}

window.addEventListener("keydown", (event) => {
  if (event.keyCode == 68) {
    keyboard.RIGHT = true;
  }
  if (event.keyCode == 65) {
    keyboard.LEFT = true;
  }
  if (event.keyCode == 87) {
    keyboard.UP = true;
  }
  if (event.keyCode == 32) {
    keyboard.SPACE = true;
  }
  if (event.keyCode == 69) {
    keyboard.THROW = true;
  }
});

window.addEventListener("keyup", (event) => {
  if (event.keyCode == 68) {
    keyboard.RIGHT = false;
  }
  if (event.keyCode == 65) {
    keyboard.LEFT = false;
  }
  if (event.keyCode == 87) {
    keyboard.UP = false;
  }
  if (event.keyCode == 32) {
    keyboard.SPACE = false;
  }
  if (event.keyCode == 69) {
    keyboard.THROW = false;
  }
});
