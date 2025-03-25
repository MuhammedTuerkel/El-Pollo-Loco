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
  
 // loads everything important at the beginning when the class loads
  constructor(img, chicken, x) {
    super().loadImage(img, this.x, 330);
    this.x = x + Math.random() * 500;
    this.loadImages(this.chicken_Normal_Walking);
    this.loadImages(this.chicken_Small_Walking);
    this.speed = 1.5 + Math.random() * 0.25;
    this.animate(chicken);
  }

  // enemies movesToLeft and have a animation
  animate(chicken) {
    setInterval(() => {
      if (chicken == "normal") {
        this.playAnimation(this.chicken_Normal_Walking);
      }
      if (chicken == "small") {
        this.playAnimation(this.chicken_Small_Walking);
      }
    }, 1000 / 10)

    setInterval(() => {
      this.moveLeft();
    }, 1000 / 15);
  }
}
