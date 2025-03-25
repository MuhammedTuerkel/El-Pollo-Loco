class gameOver extends DrawableObject {
  width = 720;
  height = 480;

  // loads everything important at the beginning when the class loads
  constructor(img) {
    super().loadImage(img);
    this.x = 0;
    this.y = 0;
  }
}
