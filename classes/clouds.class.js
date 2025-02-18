class clouds extends movableObject {
  width = 600;
  height = 250;

  constructor(img) {
    super().loadImage(img);
    this.y = 10;
    let random = Math.random() * 200;
    this.x = Math.trunc(random);
    this.speed = 1;
    this.animate();
  }

  animate() {
  this.moveLeft();
  }

}
