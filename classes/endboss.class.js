class endBoss extends movableObject {
  height = 350;
  width = 250;
  y = 100;
  health = 100;
  isHit = false;
  speed = 0.5;
  world;

  IMAGES_Alert = [
    "img/4_enemie_boss_chicken/2_alert/G5.png",
    "img/4_enemie_boss_chicken/2_alert/G6.png",
    "img/4_enemie_boss_chicken/2_alert/G7.png",
    "img/4_enemie_boss_chicken/2_alert/G8.png",
    "img/4_enemie_boss_chicken/2_alert/G9.png",
    "img/4_enemie_boss_chicken/2_alert/G10.png",
    "img/4_enemie_boss_chicken/2_alert/G11.png",
    "img/4_enemie_boss_chicken/2_alert/G12.png",
  ];

  IMAGES_ATTACK = [
    "img/4_enemie_boss_chicken/3_attack/G13.png",
    "img/4_enemie_boss_chicken/3_attack/G14.png",
    "img/4_enemie_boss_chicken/3_attack/G15.png",
    "img/4_enemie_boss_chicken/3_attack/G16.png",
    "img/4_enemie_boss_chicken/3_attack/G17.png",
    "img/4_enemie_boss_chicken/3_attack/G18.png",
    "img/4_enemie_boss_chicken/3_attack/G19.png",
    "img/4_enemie_boss_chicken/3_attack/G20.png",
  ];

  IMAGES_Walking = [
    "img/4_enemie_boss_chicken/1_walk/G1.png",
    "img/4_enemie_boss_chicken/1_walk/G2.png",
    "img/4_enemie_boss_chicken/1_walk/G3.png",
    "img/4_enemie_boss_chicken/1_walk/G4.png",
  ];

  IMAGES_HURT = [
    "img/4_enemie_boss_chicken/4_hurt/G21.png",
    "img/4_enemie_boss_chicken/4_hurt/G22.png",
    "img/4_enemie_boss_chicken/4_hurt/G23.png",
  ];

  IMAGES_DEAD = [
    "img/4_enemie_boss_chicken/5_dead/G24.png",
    "img/4_enemie_boss_chicken/5_dead/G25.png",
    "img/4_enemie_boss_chicken/5_dead/G26.png",
  ];

  constructor(img) {
    super().loadImage(img, this.x, this.y);
    this.loadImages(this.IMAGES_Alert);
    this.loadImages(this.IMAGES_Walking);
    this.loadImages(this.IMAGES_ATTACK);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 1900;
    this.animate();
  }

  hadContact = false;
  i = 0;
  animate() {
    setInterval(() => {
      if (this.health == 1) {
        this.playAnimation(this.IMAGES_DEAD);
        setTimeout(() => {
          window.location.reload();
        }, 400);
      } else if (this.isHit) {
        this.playAnimation(this.IMAGES_HURT);
      } else if (this.world.character.x > 1500 || this.hadContact) {
        this.walk();
        this.i++;
      }
    }, 200);

    setInterval(() => {
      if (this.health > 2 && this.hadContact) {
        this.moveLeft();
      }
    }, 1000 / 60);
  }

  walk() {
    if (this.i < 7) {
      this.playAnimation(this.IMAGES_Alert);
    } else if (this.i < 14) {
      this.playAnimation(this.IMAGES_ATTACK);
    } else {
      this.playAnimation(this.IMAGES_Walking);
      this.hadContact = true;
    }
  }

  hit() {
    if (this.health > 2) {
      this.health -= 33;
      this.isHit = true;
      setTimeout(() => {
        this.isHit = false;
      }, 400);
    }
  }
}
