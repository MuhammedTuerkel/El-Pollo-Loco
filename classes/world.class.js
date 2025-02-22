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
  }

setWorld(){
  this.character.world = this;
}

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

this.ctx.translate(this.camera_x, 0);

    this.addToMap(this.level.backgroundObjects);
    this.addToMap(this.level.clouds);
    this.addToMap(this.level.enemies);
    this.addToMap(this.level.coins);

    if (this.character.otherDirection) {
      this.ctx.save();
      this.ctx.translate(this.character.width , 0);
      this.ctx.scale(-1, 1);
      this.character.x = this.character.x  * -1;
    }
    this.ctx.drawImage(
      this.character.img,
      this.character.x,
      this.character.y,
      this.character.width,
      this.character.height
    );
    if (this.character.otherDirection) {
      this.character.x = this.character.x  * -1;
      this.ctx.restore()
      }

      this.ctx.translate(-this.camera_x , 0);

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
}
}