class movableObject {
  x;
  y;
  img;
  height = 100;
  width = 100;
  imageChace = {};
  currentImage = 0;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;

  loadImage(path, x, y) {
    this.img = new Image();
    this.img.src = path;
    this.x = x;
    this.y = y;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageChace[path] = img;
    });
  }

  moveRight() {
    this.x += this.speed;
    this.otherDirection = false;
  }

  moveLeft() {
      this.x -= this.speed;
  }

  playAnimation(images) {
    let i = this.currentImage % this.IMAGES_Walking.length;
    let path = images[i];
    this.img = this.imageChace[path];
    this.currentImage++;
  }
  isAboveGround() {
    return this.y < 180;
  }

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  jump() {
    return (this.speedY = 25);
  }
}
