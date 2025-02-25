class World {
  character = new Character();
  level = level1;

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
    this.checkCollisions();
  }

  setWorld() {
    this.character.world = this;
  }

  checkCollisions(){
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
       if( this.character.isColliding(enemy)){
        this.character.hit();
        console.log (this.character.energy)
       }
      })
    }, 200);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addToMap(this.level.backgroundObjects);
    this.addToMap(this.level.clouds);
    this.addToMap(this.level.enemies);
    this.addToMap(this.level.coins);
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
}
