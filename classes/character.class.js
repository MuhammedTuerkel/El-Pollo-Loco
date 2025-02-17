class Character extends movableObject {
    IMAGES_Walking = [
        "img/2_character_pepe/2_walk/W-21.png",
        "img/2_character_pepe/2_walk/W-22.png",
        "img/2_character_pepe/2_walk/W-23.png",
        "img/2_character_pepe/2_walk/W-24.png",
        "img/2_character_pepe/2_walk/W-25.png",
        "img/2_character_pepe/2_walk/W-26.png",
      ];
  constructor() {
    super().loadImage("img/2_character_pepe/2_walk/W-21.png", 150, 180);
    this.height = 250;
    this.width = 130;
    this.loadImages(this.IMAGES_Walking);
    this.animate();
  }
  
animate(){
    setInterval(() => {
        let i = this.currentImage % this.IMAGES_Walking.length;
let path = this.IMAGES_Walking[i];
this.img = this.imageChace[path];
this.currentImage++
}, 1000/ 10);
}
  jump() {}
}
