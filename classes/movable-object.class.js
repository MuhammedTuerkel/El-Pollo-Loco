class movableObject extends DrawableObject {
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  energy = 100;
  lastHit = 0;
  hitSound = new Audio("audio/hit.wav");

  offset = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  /** * push the audio to an array */
  constructor() {
    super();
    audioList.push(this.hitSound);
  }

  /** * the movableObject moves to right at a speed */
  moveRight() {
    this.x += this.speed;
  }

  /** * the movableObject moves to left at a speed */
  moveLeft() {
    this.x -= this.speed;
  }

  /** * different animations of movableObjects is being played */
  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageChace[path];
    this.currentImage++;
  }

  /** * checks if the movableObject is above ground */
  isAboveGround() {
    if (this instanceof ThrowableObject) {
      return true;
    } else {
      return this.y < 180;
    }
  }

  /** * checks if 2 objects colliding */
  isColliding(obj) {
    return (
      this.x + this.width - this.offset.right > obj.x + obj.offset.left &&
      this.y + this.height - this.offset.bottom > obj.y + obj.offset.top &&
      this.x + this.offset.left < obj.x + obj.width - obj.offset.right &&
      this.y + this.offset.top < obj.y + obj.height - obj.offset.bottom
    );
  }

  isAbove(enemy) {
    const characterBottom = this.y + this.height - this.offset.bottom;
    const enemyTop = enemy.y + enemy.offset.top;
    return (
      characterBottom >= enemyTop +15  && 
      this.speedY > -27.5 && this.speedY < -10                  
    );
  }

  /** * the world has a gravity and attracts objects at the same speed */
  applyGravity() {
    this.gravityInterval = setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  /** * speed of jumping */
  jump() {
    return (this.speedY = 25);
  }

  /** * when ernegy is 0 you are dead */
  isDead() {
    return this.energy == 0;
  }

  /** * the animation when the character is hit */
  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 1;
  }

  /** * when the character is hit his ernegy goes down by -5 and a hit sound is played */
  hit() {
    if (this.energy > 0) {
      this.energy -= 5;
      this.hitSound.play();
    }
    this.lastHit = new Date().getTime();
  }
}
