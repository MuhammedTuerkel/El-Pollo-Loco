class ThrowableObject extends movableObject {
  speedY = 30;
  speedX = 20;
salsabottle = 0;
world;
  constructor(x, y, world) {
    super().loadImage("img/6_salsa_bottle/salsa_bottle.png");
    this.x = x;
    this.y = y;
    this.world = world;
    this.throw();
  }

  throw() {
    this.applyGravity();
      setInterval(() => {
        if (!this.world.character.otherDirection) {
          this.x += 10;
        }else if (this.world.character.otherDirection) {    
        this.x -= 10;
        }
      }, 25);
  }
}
