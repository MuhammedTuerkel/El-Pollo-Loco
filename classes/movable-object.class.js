class movableObject {
  x;
  y;
  img;
  height = 100;
  width = 100;
  imageChace = {};
  currentImage = 0;
otherDirection = false;

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

  moveRight() {}

  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000/ 15);
  }

  playAnimation(images){
    let i = this.currentImage % this.IMAGES_Walking.length;
    let path = images[i];
    this.img = this.imageChace[path];
    this.currentImage++;
  }
}
