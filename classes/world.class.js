class World {
  character = new Character();
  level = level1;
  statusbar = [
    new StatusBar(0, -10, "Live"),
    new StatusBar(1, 40, "Coins"),
    new StatusBar(2, 95, "Salsabottle"),
  ];
  throwableObject = [];
  canvas;
  ctx;
  keyboard;
  camera_x = 0;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  setWorld() {
    this.character.world = this;
  }

  run() {
    setInterval(() => {
      this.checkCollisionsWithEnemies();
      this.checkCollisionsWithCoins();
      this.checkCollisionsWithSalsaBottle();
      this.checkThrowObjects();
    }, 200);
  }

checkThrowObjects(){
  if (this.keyboard.THROW && this.statusbar[2].salsaBottle > 1) {
    let bottle = new ThrowableObject(this.character.x + 50, this.character.y +90);
    this.throwableObject.push(bottle);
    this.statusbar[2].salsaBottle -= 20;
    this.statusbar[2].salsaBottleImage(this.character.salsaBottle);
  }
}

  checkCollisionsWithEnemies() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit();
        this.statusbar[0].setPercentage(this.character.energy);
      }
    });
  }

  checkCollisionsWithCoins() {
    for (let i = 0; i < this.level.coins.length; i++) {
      if (this.character.isColliding(coins[i])) {
        this.character.collectCoin();
        this.deleteCoin(i);
        this.statusbar[1].coinsImage(this.character.coins);
      }
    }
  }

  checkCollisionsWithSalsaBottle() {
    for (let i = 0; i < this.level.salsabottle.length; i++) {
      if (this.character.isColliding(this.level.salsabottle[i])) {
        this.character.collectSalsabottle();
        this.deleteSalsabottle(i);
        this.statusbar[2].salsaBottleImage(this.character.salsaBottle);
      }
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addToMap(this.level.backgroundObjects);
    this.addToMap(this.level.clouds);
    this.addToMap(this.level.enemies);
    this.addToMap(this.level.coins);
    this.addToMap(this.level.salsabottle);
    this.addToMap(this.throwableObject);
    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusbar);
    this.ctx.translate(this.camera_x, 0);
    this.changeDirection();
    this.ctx.beginPath();
    this.ctx.lineWidth = "5";
    this.ctx.strokeStyle = "blue";
    this.ctx.rect(
      this.character.x,
      this.character.y,
      this.character.width,
      this.character.height
    );
    this.ctx.stroke();
    this.addCharacterToMap();
    this.restoreDirection();
    this.ctx.translate(-this.camera_x, 0);
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

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
    for (let x = 0; x < this.level.enemies.length; x++) {
      this.ctx.beginPath();
      this.ctx.lineWidth = "5";
      this.ctx.strokeStyle = "blue";
      this.ctx.rect(
        this.level.enemies[x].x,
        this.level.enemies[x].y,
        this.level.enemies[x].width,
        this.level.enemies[x].height
      );
      this.ctx.stroke();
    }
  }

  changeDirection(num) {
    if (this.character.otherDirection) {
      this.ctx.save();
      this.ctx.translate(this.character.width, 0);
      this.ctx.scale(-1, 1);
      this.character.x = this.character.x * -1;
    }
  }

  restoreDirection() {
    if (this.character.otherDirection) {
      this.character.x = this.character.x * -1;
      this.ctx.restore();
    }
  }

  addCharacterToMap() {
    this.ctx.drawImage(
      this.character.img,
      this.character.x,
      this.character.y,
      this.character.width,
      this.character.height
    );
  }

  deleteCoin(i) {
    this.level.coins.splice(i, 1);
  }

  deleteSalsabottle(i) {
    this.level.salsabottle.splice(i, 1);
  }
}
