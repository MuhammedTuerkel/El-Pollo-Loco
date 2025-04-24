class endBoss extends movableObject {
  height = 350;
  width = 250;
  y = 100;
  health = 100;
  isHit = false;
  speed = 1;
  world;
  hadContact = false;
  intervalsAfterHadContact = 0;

  images_Alert = [
    "img/4_enemie_boss_chicken/2_alert/G5.png",
    "img/4_enemie_boss_chicken/2_alert/G6.png",
    "img/4_enemie_boss_chicken/2_alert/G7.png",
    "img/4_enemie_boss_chicken/2_alert/G8.png",
    "img/4_enemie_boss_chicken/2_alert/G9.png",
    "img/4_enemie_boss_chicken/2_alert/G10.png",
    "img/4_enemie_boss_chicken/2_alert/G11.png",
    "img/4_enemie_boss_chicken/2_alert/G12.png",
  ];

  images_Attack = [
    "img/4_enemie_boss_chicken/3_attack/G13.png",
    "img/4_enemie_boss_chicken/3_attack/G14.png",
    "img/4_enemie_boss_chicken/3_attack/G15.png",
    "img/4_enemie_boss_chicken/3_attack/G16.png",
    "img/4_enemie_boss_chicken/3_attack/G17.png",
    "img/4_enemie_boss_chicken/3_attack/G18.png",
    "img/4_enemie_boss_chicken/3_attack/G19.png",
    "img/4_enemie_boss_chicken/3_attack/G20.png",
  ];

  images_Walking = [
    "img/4_enemie_boss_chicken/1_walk/G1.png",
    "img/4_enemie_boss_chicken/1_walk/G2.png",
    "img/4_enemie_boss_chicken/1_walk/G3.png",
    "img/4_enemie_boss_chicken/1_walk/G4.png",
  ];

  images_Hurt = [
    "img/4_enemie_boss_chicken/4_hurt/G21.png",
    "img/4_enemie_boss_chicken/4_hurt/G22.png",
    "img/4_enemie_boss_chicken/4_hurt/G23.png",
  ];

  images_Dead = [
    "img/4_enemie_boss_chicken/5_dead/G24.png",
    "img/4_enemie_boss_chicken/5_dead/G25.png",
    "img/4_enemie_boss_chicken/5_dead/G26.png",
  ];

/** * loads everything important at the beginning when the class loads */
  constructor(endBoss) {
    super().loadImage(endBoss, this.x, this.y);
    this.loadImages(this.images_Alert);
    this.loadImages(this.images_Walking);
    this.loadImages(this.images_Attack);
    this.loadImages(this.images_Hurt);
    this.loadImages(this.images_Dead);
    this.x = 1600;
    this.animate();
    this.moveLeftFunction();
  }

/** * make different animations when hit is dead or walk */
  animate() {
    setInterval(() => {
      if (this.health == 0) {
        this.isDead();
      } else if (this.isHit) {
        this.playAnimation(this.images_Hurt);
      } else if ( this.hadContact) {
        this.walk();
        this.intervalsAfterHadContact++;
      }else if (this.world.character.x > 1220) {
        this.hadContact = true;
      }
    }, 100);
  }

/** * when he's dead the game ends */
  isDead() {
    this.playAnimation(this.images_Dead);
    setTimeout(() => {
      this.health = 100;
      this.world.winTheGame();
      wonTheGame();
    }, 1000);
  }

/** * he walks to left if he is alive and he had eye contact with the character */
  moveLeftFunction() {
    setInterval(() => {
      if (this.health > 0 && this.intervalsAfterHadContact > 14) {
        this.moveLeft();
      }
    }, 1000 / 60);
  }


 /** * when he had eyeContact with the character he makes a animation and beginns to walk */
  walk() {
    if (this.intervalsAfterHadContact < 7) {
      this.playAnimation(this.images_Alert);
    } else if (this.intervalsAfterHadContact < 14) {
      this.playAnimation(this.images_Attack);
    } else if (this.intervalsAfterHadContact >14){
      this.playAnimation(this.images_Walking);
      this.hadContact = true;
    }
  }

/** * when he is hit by the salsaBottle his health goes down by 33% after 3 hits he is dead */
  hit() {
    if (this.health > 0) {
      this.health -= 20;
      this.isHit = true;
      setTimeout(() => {
        this.isHit = false;
      }, 400);
    }
  }
}
