class Character extends movableObject {
  images_Walking = [
    "img/2_character_pepe/2_walk/W-21.png",
    "img/2_character_pepe/2_walk/W-22.png",
    "img/2_character_pepe/2_walk/W-23.png",
    "img/2_character_pepe/2_walk/W-24.png",
    "img/2_character_pepe/2_walk/W-25.png",
    "img/2_character_pepe/2_walk/W-26.png",
  ];

  images_Jumping = [
    "img/2_character_pepe/3_jump/J-31.png",
    "img/2_character_pepe/3_jump/J-32.png",
    "img/2_character_pepe/3_jump/J-33.png",
    "img/2_character_pepe/3_jump/J-34.png",
    "img/2_character_pepe/3_jump/J-35.png",
    "img/2_character_pepe/3_jump/J-36.png",
    "img/2_character_pepe/3_jump/J-37.png",
    "img/2_character_pepe/3_jump/J-38.png",
    "img/2_character_pepe/3_jump/J-39.png",
  ];

  images_Dead = [
    "img/2_character_pepe/5_dead/D-51.png",
    "img/2_character_pepe/5_dead/D-52.png",
    "img/2_character_pepe/5_dead/D-53.png",
    "img/2_character_pepe/5_dead/D-54.png",
    "img/2_character_pepe/5_dead/D-55.png",
    "img/2_character_pepe/5_dead/D-56.png",
    "img/2_character_pepe/5_dead/D-57.png",
  ];

  images_Hurt = [
    "img/2_character_pepe/4_hurt/H-41.png",
    "img/2_character_pepe/4_hurt/H-42.png",
    "img/2_character_pepe/4_hurt/H-43.png",
  ];

  world;
  coins = 0;
  salsaBottle= 0;
 randomNumberForEndscreen =Math.floor(Math.random() * 4);
  offset = {
    top: 120,
    left: 30,
    right: 40,
    bottom: 30,
  };

  // loads everything important at the beginning when the class loads
  constructor(character) {
    super().loadImage(character, 150, 80);
    this.height = 250;
    this.width = 130;
    this.loadImages(this.images_Walking);
    this.loadImages(this.images_Jumping);
    this.loadImages(this.images_Dead);
    this.loadImages(this.images_Hurt);
    this.move();
    this.animateCharacter();
    this.applyGravity();
  }

  // checks if keys pressed and moves right, left and up
  move() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX) {
      this.moveRightFunction();
      }
      if (this.world.keyboard.LEFT && this.x > 110) {
      this.moveLeftFunction();
      }
      if (this.world.keyboard.SPACE && !this.isAboveGround()) {
    this.jumpFunction();
      }
      this.cameraMovesWithCharacter();
    }, 1000 / 60);
  }

  // character make different animations for example when he is jumping, walking, is hit or when he's dead
  animateCharacter(){
    setInterval(() => {
      if (this.isDead()) {
     this.isDeadFunction();
      }else  if (this.isHurt()) {
        this.playAnimation(this.images_Hurt);
      }else  if (this.isAboveGround()) {
        this.playAnimation(this.images_Jumping);
      } else  if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
          this.playAnimation(this.images_Walking);
        }
    }, 1000 / 10);
  }

// coins are going up to 100 coins thats the max you can have
  collectCoin(){
    if (this.coins < 100) {
    this.coins += 20;
    }
}

// salsabottles going up to 100 thats the max you can have
collectSalsabottle(){
  if (this.salsaBottle < 100) {
    this.world.statusbar[2].salsaBottle += 20;
  }
}


// when the charcter moves the camera moves with him
cameraMovesWithCharacter(){
 return this.world.camera_x = -this.x + 100;
}


// function to walk right
moveRightFunction(){
  this.moveRight();
  this.otherDirection = false;
}


// function to walk left
moveLeftFunction(){
  this.moveLeft();
  this.otherDirection = true;
}

// function to jump
jumpFunction(){
  this.jump();
  let jumpSound = new Audio('audio/jump.wav');
  jumpSound.play();
}

// when the Character is Dead it plays the Dead animation and then loads the Gameoverscreen
isDeadFunction(){
  this.playAnimation(this.images_Dead);
  setTimeout(() => {
    this.world.gameOverScreen(this.randomNumberForEndscreen);
  }, 700);
}
}
