class Chicken extends movableObject {

    x= 300 + Math.random() * 500;
   

  constructor(img) {

      super().loadImage(img, this.x, 330);
      this.height = 100;
      this.width = 100;
 
  }
}
