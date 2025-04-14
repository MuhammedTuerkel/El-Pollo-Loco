class Clouds extends movableObject {
  width = 600;
  height = 250;

/** * loads everything important at the beginning when the class loads */
  constructor(img, x) {
    super().loadImage(img,);
    this.y = 10;
    let random = Math.random() * 200;
    this.x = Math.trunc(random) + x;
    this.speed = 1;
    this.animate();
  }

/** * clouds moveLeft */
  animate() {
  this.moveLeft();
  }
}
