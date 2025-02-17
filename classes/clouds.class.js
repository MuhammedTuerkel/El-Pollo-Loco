class clouds extends movableObject {
  width = 600;
  height = 250;

  constructor(img) {
    super().loadImage(img);
    this.y = 10;
    let random = Math.random() * 200;
    this.x = Math.trunc(random);
    this.cloudsMove();
  }

  cloudsMove() {
    setInterval(() => {
      this.x -= 0.25;
      if (this.x == 0) {
        this.x = 500;
      }
    }, 1000 / 60);
  }
}
