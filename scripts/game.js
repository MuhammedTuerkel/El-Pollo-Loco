let canvas;
let world;
let keyboard = new Keyboard();
let allow = false;
let audioList = [];
let gameIsRunning = false;

function onload() {
  canvas = document.getElementById("canvas");
  setMuteInLocalStorage("reload");
  canvas.setAttribute("onclick", "init(allow = true)");
  init();
}

/** * function that loads when the website loads */
function init() {
  if (allow == true) {
    canvas.removeAttribute("onclick");
    startGame();
  }
  if (allow == false) {
    addStartScreen();
  }
}

/** * function that gets and sets mute in the localStorage */
function setMuteInLocalStorage(reload){
let path = localStorage.getItem("muted");
if (reload) {
  path = checkFromPageReload(path);
}
if(path == "true"){
ifMutedIsTrue();
}else if(path == "false"){
ifMutedIsFalse();
}
if (audioList.length > 0) {
  let audio = localStorage.getItem("muted")
  muteWebsite(audio)
}
}

/** * when the page reloads this function checks from the Localstorage if the Website is already muted or not */
function checkFromPageReload(path){
  if (path == "true") {
  return path = "false"
  }else if (path == "false"){
  return  path = "true"
  }
}

/** * function that if muted is true it turns it into false  */
function ifMutedIsTrue(){
  document.getElementById("unmuted").style = "display:flex;"
  localStorage.setItem("muted", false)
  document.getElementById("muted").style = "display:none;"
}

/** * function that if muted is false it turns it into true  */
function ifMutedIsFalse(){
  document.getElementById("muted").style = "display:flex;"
  localStorage.setItem("muted", true);
  document.getElementById("unmuted").style = "display:none;"
}

/** * makes the game to fullscreen */
function fullscreenMode() {
  canvas.requestFullscreen();
}

/** * mutes all sounds in the website */
function muteWebsite(muted) {
  let isMuted = muted === "true";
  audioList.forEach((audio) => {
    audio.muted = isMuted;
  });
 
}

/** * creates the world class and starts the game */
function startGame() {
  initLevel();
world = new World(canvas, keyboard);
setMuteInLocalStorage("reload")
  gameIsRunning = true;
}

/** * adds a startScreen without starting the game */
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
