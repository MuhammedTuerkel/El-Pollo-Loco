class World {
  character = new Character();
  enemies = [
    new Chicken("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png"),
    new Chicken("img/3_enemies_chicken/chicken_small/1_walk/1_w.png"),
    new Chicken("img/4_enemie_boss_chicken/1_walk/G1.png"),
  ];
  clouds = [new clouds("img/5_background/layers/4_clouds/1.png")];

  backgroundObjects = [
    new backgroundObject("img/5_background/layers/air.png"),
    new backgroundObject("img/5_background/layers/3_third_layer/1.png"),
    new backgroundObject("img/5_background/layers/2_second_layer/1.png"),
    new backgroundObject("img/5_background/layers/1_first_layer/1.png")
  ];
  canvas;
  ctx;
  keyboard;

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

    this.addToMap(this.backgroundObjects);
    this.addToMap(this.clouds);
    this.addToMap(this.enemies);

    this.ctx.drawImage(
      this.character.img,
      this.character.x,
      this.character.y,
      this.character.width,
      this.character.height
    );

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

addToMap(object) {
  object;
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