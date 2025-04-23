class ThrowableObject extends movableObject {
  speedY = 30;
  speedX = 20;
  salsabottle = 0;
  world;

  bottleFlyAnimation = [
    "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
  ]

bottleSplash = [
  "img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
  "img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
  "img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
  "img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
  "img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
  "img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
];

/** * loads everything important at the beginning when the class loads */
  constructor(x, y, world) {
    super().loadImage("img/6_salsa_bottle/salsa_bottle.png");
    this.loadImages(this.bottleFlyAnimation);
    this.loadImages(this.bottleSplash);
    this.x = x;
    this.y = y;
    this.world = world;
    this.throw();
    this.animate();
  }

/** * a Object that is throwed ist flying towards and down because of gravity */
  throw() {
    this.applyGravity();
    this.FlyingBottle = setInterval(() => {
      if (!this.world.character.otherDirection) {
        this.x += 10;
      } else if (this.world.character.otherDirection) {
        this.x -= 10;
      }
    }, 25);
  }

  /** *gives the bottle a flying and turning animation */
  animate(){
   this.bottleAnimation = setInterval(() => {
      this.playAnimation(this.bottleFlyAnimation);
    }, 1000/25);
  }

  /** *when the bottle have contact with the enemie it splashes on the point */
  splash(){
clearInterval(this.FlyingBottle);
clearInterval(this.bottleAnimation);
clearInterval(  this.gravityInterval);
let splash = setInterval(() => {
  this.playAnimation(this.bottleSplash)
}, 1000/12);
setTimeout(() => {
  clearInterval(splash)
  this.x =3000
}, 500);
  }
}
