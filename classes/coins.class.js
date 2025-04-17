class coin extends movableObject {
  width = 125;
  height = 125;

/** * loads everything important at the beginning when the class loads */
  constructor(img, x, y) {
    super().loadImage(img);
    this.x = x;
    this.y = y;
  }
}
