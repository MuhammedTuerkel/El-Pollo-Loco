class DrawableObject{
    img;
    imageChace = {};
    currentImage = 0;
    x;
    y;
    height = 100;
    width = 100;
    speed = 8;

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
}