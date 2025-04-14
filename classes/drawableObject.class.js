class DrawableObject{
    img;
    imageChace = {};
    currentImage = 0;
    x;
    y;
    height = 100;
    width = 100;
    speed = 8;

// makes a img tag and puts the path in to the source like this: <img src="path"></img>
    loadImage(path, x, y) {
        this.img = new Image();
        this.img.src = path;
        this.x = x;
        this.y = y;
      }
    
    /** * makes a lot of images from a variable and puts the path in to the source like this: <img src="path"></img> */
      loadImages(arr) {
        arr.forEach((path) => {
          let img = new Image();
          img.src = path;
          this.imageChace[path] = img;
        });
      }
}