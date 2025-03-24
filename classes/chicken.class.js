class Chicken extends movableObject {
  x = 300 + Math.random() * 500;

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

  CHICKEN
  constructor(img, chicken) {
    super().loadImage(img, this.x, 330);
    this.loadImages(this.chicken_Normal_Walking);
this.loadImages(this.chicken_Small_Walking);
    this.speed = 1.5 + Math.random() * 0.25;
    this.animate(chicken);
  }

  animate(chicken) {
    setInterval(() => {
      if (chicken == 1) {
        this.playAnimation(this.chicken_Normal_Walking);
      }
      if (chicken == 2) {
        this.playAnimation(this.chicken_Small_Walking);
      }
    }, 1000 / 10);
    
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 15);
  }
}
