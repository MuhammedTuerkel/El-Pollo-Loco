class Chicken extends movableObject {
  chicken_Normal_Walking = [
    "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  chicken_Small_Walking = [
    "img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
  ];

  chicken_Normal_Dead = [
    "img/3_enemies_chicken/chicken_normal/2_dead/dead.png",
  ];

  chicken_Small_Dead = ["img/3_enemies_chicken/chicken_small/2_dead/dead.png"];

  chickenHit = 0;

  offset = {
    top: -40,
    left: 0,
    right: 0,
    bottom: 0,
  };

  /** * loads everything important at the beginning when the class loads */
  constructor(img, chicken, x) {
    super().loadImage(img, this.x, 330);
    this.x = x + Math.random() * 500;
    this.loadImages(this.chicken_Normal_Walking);
    this.loadImages(this.chicken_Small_Walking);
    this.loadImages(this.chicken_Normal_Dead);
    this.loadImages(this.chicken_Small_Dead);
    this.speed = 1.5 + Math.random() * 0.25;
    this.animate(chicken);
  }

  /** * enemies movesToLeft and have a animation */
  animate(chicken) {
    setInterval(() => {
      if (chicken == "normal") {
        this.normalChickenAnimations();
      }
      if (chicken == "small") {
        this.smallChickenAnimations();
      }
    }, 1000 / 10);

    setInterval(() => {
      if (this.chickenHit == 0) {
        this.moveLeft();
      }
    }, 1000 / 15);
  }

    /** * animations for the normal size chickens */
  normalChickenAnimations() {
    if (this.chickenHit == 1) {
      this.playAnimation(this.chicken_Normal_Dead);
    } else {
      this.playAnimation(this.chicken_Normal_Walking);
    }
  }

  /** * animations for the small size chickens */
  smallChickenAnimations() {
    if (this.chickenHit == 1) {
      this.playAnimation(this.chicken_Small_Dead);
    } else {
      this.playAnimation(this.chicken_Small_Walking);
    }
  }
}
