class World {
  character = new Character("img/2_character_pepe/2_walk/W-21.png");
  level = level1;
  statusbar = [
    new StatusBar("energy", -10),
    new StatusBar("coins", 40),
    new StatusBar("salsabottle", 95),
  ];
  throwableObject = [];
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  gameOver = false;
  gameMusic = new Audio("audio/gamemusic.wav");
  gameoverMusic = new Audio ("audio/gameover.wav");
 trow = new Audio("audio/throw.mp3");

  // loads everything important at the beginning when the class loads
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.playGameMusic();
    this.setWorld();
    this.run();
    this.keyboard.bindBtsPressEvents();
  }

  // plays the gamemusic in the background
playGameMusic(){
  this.gameMusic.loop = true;
  this.gameMusic.play();
  audioList.push(this.gameMusic);
  audioList.push(this.trow);
  audioList.push(this.gameoverMusic);
}

  // set the world variable to the subvariables to have access to it
  setWorld() {
    this.character.world = this;
    this.level.enemies[3].world = this;
  }

  // runs the checkColission functions in an Interval that checks 5 times a second
  run() {
    setInterval(() => {
      this.checkCollisionsWithEnemies();
      this.checkCollisionsWithCoins();
      this.checkCollisionsWithSalsaBottle();
      this.checkThrowObjects();
    }, 200);
  }

  // the draw function is a function that's repeats itself again and again it draws everything in to the canvas
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addAllObjectsToMap();
    this.addStatusBarToMap();
    this.changeDirection();
    this.addCharacterToMap();
    this.restoreDirection();
    this.ctx.translate(-this.camera_x, 0);
    let self = this;
    if (!this.gameOver) {
      requestAnimationFrame(function () {
        self.draw();
      });
    }
  }

  // calls the addToMap-draw function for all objects
  addAllObjectsToMap() {
    this.addToMap(this.level.backgroundObjects);
    this.addToMap(this.level.clouds);
    this.addToMap(this.level.enemies);
    this.addToMap(this.level.coins);
    this.addToMap(this.level.salsabottle);
    this.addToMap(this.throwableObject);
  }

  // calls the addToMap-draw function for the statusbar and moves with the camera to stay static
  addStatusBarToMap() {
    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusbar);
    this.ctx.translate(this.camera_x, 0);
  }

  // checks if you have a Object to throw and then throws it
  checkThrowObjects() {
    if (this.keyboard.THROW && this.statusbar[2].salsaBottle > 1) {
     let bottle = this.throwObject();
      this.trow.play();
      this.checkCollisionsWithEndBoss(bottle);
    }
  }

  // Creates the throwableObject and draws it then refreshs the statusbar
  throwObject() {
    let bottle = new ThrowableObject(
      this.character.x + 50,
      this.character.y + 90,
      this
    );
    this.throwableObject.push(bottle);
    this.statusbar[2].salsaBottle -= 20;
    this.statusbar[2].setSalsabottleInTheStatusbar(
      this.statusbar[2].salsaBottle
    );
    return bottle
  }

  // checks if the character have a collision with the enemies or the endBoss
  checkCollisionsWithEnemies() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit();
        this.statusbar[0].setEnergyInTheStatusbar(this.character.energy);
      }
    });
  }

  // checks if the character have a collision with coins
  checkCollisionsWithCoins() {
    for (let i = 0; i < this.level.coins.length; i++) {
      if (this.character.isColliding(coins[i])) {
        this.character.collectCoin();
        this.deleteCoin(i);
        this.statusbar[1].setCoinsInTheStatusBar(this.character.coins);
      }
    }
  }

  // checks if the character have a collision with salsabottles
  checkCollisionsWithSalsaBottle() {
    for (let i = 0; i < this.level.salsabottle.length; i++) {
      if (this.character.isColliding(this.level.salsabottle[i])) {
        this.character.collectSalsabottle();
        this.deleteSalsabottle(i);
        this.statusbar[2].setSalsabottleInTheStatusbar(
          this.statusbar[2].salsaBottle
        );
      }
    }
  }

    // checks if the salsabottles have a collision with the endBoss
  checkCollisionsWithEndBoss(bottle) {
    let Interval = setInterval(() => {
      if (bottle.isColliding(this.level.enemies[3])) {
        this.level.enemies[3].hit();
      }
    }, 1000);
    setTimeout(() => {
      clearInterval(Interval);
    }, 2000);
  }

  // draws the objects in to the map
  addToMap(object) {
    for (let i = 0; i < object.length; i++) {
      this.ctx.drawImage(
        object[i].img,
        object[i].x,
        object[i].y,
        object[i].width,
        object[i].height
      );
    }
  }

  // changes the direction of the Character if he walks to the opposite side
  changeDirection() {
    if (this.character.otherDirection) {
      this.ctx.save();
      this.ctx.translate(this.character.width, 0);
      this.ctx.scale(-1, 1);
      this.character.x = this.character.x * -1;
    }
  }

  // restores the direction of the character
  restoreDirection() {
    if (this.character.otherDirection) {
      this.character.x = this.character.x * -1;
      this.ctx.restore();
    }
  }

  // draws the character to the map
  addCharacterToMap() {
    this.ctx.drawImage(
      this.character.img,
      this.character.x,
      this.character.y,
      this.character.width,
      this.character.height
    );
  }

  // deletes the coin if you colllect it from the ground 
  deleteCoin(i) {
    this.level.coins.splice(i, 1);
  }

  // deletes the salsaBottle if you colllect it from the ground 
  deleteSalsabottle(i) {
    this.level.salsabottle.splice(i, 1);
  }

  // if you die the game is over and it loads the gameover screen
  gameOverScreen(i,cI) {
    this.gameMusic.pause();
    this.gameMusic.currentTime = 0;
    this.gameOver = true;
    this.addToMap(this.level.backgroundObjects);
    this.addGameOverToMap(i);
    this.gameoverMusic.play();
    clearInterval(cI)
    setTimeout(() => {
      this.goToStartScreen(true);
    }, 3000);
  }
  
  winTheGame(){
    this.gameMusic.pause();
    this.gameMusic.currentTime = 0;
    this.gameOver = true;
  }

  goToStartScreen(){
    world = null;
    init(allow= false);
    canvas.setAttribute("onclick", "init(allow= true)");
  }

  // add a random gameover screen to the canvas
  addGameOverToMap(i) {
    this.ctx.drawImage(
      this.level.gameover[i].img,
      this.level.gameover[i].x,
      this.level.gameover[i].y,
      this.level.gameover[i].width,
      this.level.gameover[i].height
    );
  }
}
