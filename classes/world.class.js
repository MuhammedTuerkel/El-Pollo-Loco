class World {
  character = new Character();
  enemies = [
    new Chicken("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png"),
    new Chicken("img/3_enemies_chicken/chicken_small/1_walk/1_w.png"),
    new Chicken("img/4_enemie_boss_chicken/1_walk/G1.png"),
  ];
  clouds = [
    new clouds("img/5_background/layers/4_clouds/1.png", 0),
    new clouds("img/5_background/layers/4_clouds/2.png", 719)
  ];

  backgroundObjects = [
    new backgroundObject("img/5_background/layers/air.png", 0),
    new backgroundObject("img/5_background/layers/3_third_layer/1.png", 0),
    new backgroundObject("img/5_background/layers/2_second_layer/1.png", 0),
    new backgroundObject("img/5_background/layers/1_first_layer/1.png", 0),
    new backgroundObject("img/5_background/layers/air.png", 719),
    new backgroundObject("img/5_background/layers/3_third_layer/2.png", 719),
    new backgroundObject("img/5_background/layers/2_second_layer/2.png", 719),
    new backgroundObject("img/5_background/layers/1_first_layer/2.png",719)
  ];
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

    this.addToMap(this.backgroundObjects);
    this.addToMap(this.clouds);
    this.addToMap(this.enemies);

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