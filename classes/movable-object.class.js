class movableObject {
  x;
  y;
  img;
  height;
  width;
  imageChace = {};
  currentImage = 0;
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

  moveLeft() {}
}
