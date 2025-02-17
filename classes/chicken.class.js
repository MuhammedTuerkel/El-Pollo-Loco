class Chicken extends movableObject {

    x= 300 + Math.random() * 500;
   
IMAGES_Walking = ['img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
  'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
  'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
]
  constructor(img) {

      super().loadImage(img, this.x, 330);
      this.loadImages(this.IMAGES_Walking)
      this.height = 100;
      this.width = 100;
 this.animate();
  }

  animate(){
    setInterval(() => {
        let i = this.currentImage % this.IMAGES_Walking.length;
let path = this.IMAGES_Walking[i];
this.img = this.imageChace[path];
this.currentImage++
}, 1000 / 10);
}
}
