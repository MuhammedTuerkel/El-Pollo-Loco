class coin extends movableObject {
  width = 125;
  height = 125;

/** * loads everything important at the beginning when the class loads */
  constructor(img, x) {
    super().loadImage(img);
    this.x = x;
    this.y = 300;
  }
}
