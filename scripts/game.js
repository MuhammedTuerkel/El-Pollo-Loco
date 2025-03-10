let canvas;
let world ;
let keyboard = new Keyboard;
let allow = false;

function init() {
  canvas = document.getElementById("canvas");
  if (allow) {
startGame();
  };
  if (!allow) {
    addStartScreen();
  }
}

function fullscreenMode(){
canvas.requestFullscreen();
}

function startGame(){
  canvas.removeAttribute("onclick");
  document.getElementById('playText').style= "display:none;"
  world = new World(canvas, keyboard);
  let gameMusic = new Audio('audio/gamemusic.wav')
gameMusic.play();
}

function addStartScreen(){
  let ctx = canvas.getContext('2d');
  let image = new Image();
  image.src = 'img/9_intro_outro_screens/start/startscreen_1.png', 0, 0, 720, 480;
  image.onload = function () { 
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  };

}

window.addEventListener('keydown',  (event) => {
  if (event.keyCode == 68) {
   keyboard .RIGHT = true;
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
if(event.keyCode == 69){
  keyboard.THROW = true;
}
}
)

window.addEventListener('keyup',  (event) => {
  if (event.keyCode == 68) {
   keyboard .RIGHT = false;
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
if(event.keyCode == 69){
  keyboard.THROW = false;
}
}
)