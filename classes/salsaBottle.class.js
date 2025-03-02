class salsaBottle extends movableObject {
  width = 100;
  height = 100;

  constructor(img, x) {
    super().loadImage(img);
    this.x = x;
    this.y = 320;
  }
}
