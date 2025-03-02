class ThrowableObject extends movableObject {
  speedY = 30;
  speedX = 20;
salsabottle = 0;
  constructor(x, y) {
    super().loadImage("img/6_salsa_bottle/salsa_bottle.png");
    this.x = x;
    this.y = y;
    this.throw();
  }

  throw() {
      this.applyGravity();
      setInterval(() => {
        this.x += 10;
      }, 25);
  }
}
