class salsaBottle extends movableObject {
  width = 100;
  height = 100;

  offset = {
    top: 30,
    left: 20,
    right: 50,
    bottom: 30,
  };

/** * loads everything important at the beginning when the class loads */
  constructor(img, x) {
    super().loadImage(img);
    this.x = x;
    this.y = 320;
  }
}
