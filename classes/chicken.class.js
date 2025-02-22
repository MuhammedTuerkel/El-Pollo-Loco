class Chicken extends movableObject {
  x = 300 + Math.random() * 500;

  IMAGES_Walking = [
    "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];
  constructor(img) {
    super().loadImage(img, this.x, 330);
    this.loadImages(this.IMAGES_Walking);
    this.speed = 1.5 + Math.random() * 0.25;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_Walking);
    }, 1000 / 10);
    
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 15);
  }
}
