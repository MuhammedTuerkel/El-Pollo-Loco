class Chicken extends movableObject {
  x = 300 + Math.random() * 500;

  CHICKEN_NORMAL_WALKING = [
    "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  CHICKEN_SMALL_WALKING = [
    "img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
  ];

  CHICKEN
  constructor(img, chicken) {
    super().loadImage(img, this.x, 330);
    this.loadImages(this.CHICKEN_NORMAL_WALKING);
this.loadImages(this.CHICKEN_SMALL_WALKING);
    this.speed = 1.5 + Math.random() * 0.25;
    this.animate(chicken);
  }

  animate(chicken) {
    setInterval(() => {
      if (chicken == 1) {
        this.playAnimation(this.CHICKEN_NORMAL_WALKING);
      }
      if (chicken == 2) {
        this.playAnimation(this.CHICKEN_SMALL_WALKING);
      }
    }, 1000 / 10);
    
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 15);
  }
}
