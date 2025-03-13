class endBoss extends movableObject{
    height= 350;
width= 250;
y = 100;
health = 100;

    IMAGES_Walking = [
        "img/4_enemie_boss_chicken/2_alert/G5.png",
        "img/4_enemie_boss_chicken/2_alert/G6.png",
        "img/4_enemie_boss_chicken/2_alert/G7.png",
        "img/4_enemie_boss_chicken/2_alert/G8.png",
        "img/4_enemie_boss_chicken/2_alert/G9.png",
        "img/4_enemie_boss_chicken/2_alert/G10.png",
        "img/4_enemie_boss_chicken/2_alert/G11.png",
        "img/4_enemie_boss_chicken/2_alert/G12.png"
      ];

      constructor(img){
        super().loadImage(img, this.x, this.y);
        this.loadImages(this.IMAGES_Walking);
        this.x = 1900;
    this.animate();
    }

    animate(){
            setInterval(() => {
           this.playAnimation(this.IMAGES_Walking);
            }, 200);
    }
}