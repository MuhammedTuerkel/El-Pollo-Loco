class StatusBar extends DrawableObject {
  liveHeart = [
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png",
  ];

  coinsBar = [
    "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/80.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png",
  ];

  salsaBottleBar = [
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png",
  "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png",
  "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png",
  "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png",
  "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png",
  "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png",
  ];

  percentage= 100;
  coins= 0;
salsaBottle = 0;

  constructor(path, y) {
    super();
    this.loadImages(this.liveHeart);
    this.loadImages(this.coinsBar);
    this.loadImages(this.salsaBottleBar);
    this.y = y;
    this.x = 10;
    this.width = 250;
    this.height = 70;
    if (path == 0) {
      this.setPercentage(100);
    } else if (path == 1) {
      this.coinsImage(0);
    } else if (path == 2) {
      this.salsaBottleImage(0);
    }
  }

  coinsImage(coins) {
    this.coins = coins;
    let imagePath = this.coinsBar[this.getNum(this.coins)];
    this.img = this.imageChace[imagePath];
  }

  salsaBottleImage(salsaBottle){
    this.salsaBottle = salsaBottle;
    let imagePath = this.salsaBottleBar[this.getNumForSalsaBottle(this.salsaBottle)];
    this.img = this.imageChace[imagePath];
  }

  setPercentage(percentage) {
    this.percentage = percentage;
    let imagePath = this.liveHeart[this.getNumForLive(this.percentage)];
    this.img = this.imageChace[imagePath];
  }

  getNumForLive(variable) {
    if (variable > 80) {
      return 5;
    } else if (variable > 60) {
      return 4;
    } else if (variable > 40) {
      return 3;
    } else if (variable > 20) {
      return 2;
    } else if (variable > 0) {
      return 1;
    } else {
      return 0;
    }
  }

  getNum(variable) {
    if (variable == 0) {
      return 0;
    } else if (variable == 20) {
      return 1;
    } else if (variable == 40) {
      return 2;
    } else if (variable == 60) {
      return 3;
    } else if (variable == 80) {
      return 4;
    } else {
      return 5;
    }
  }

  getNumForSalsaBottle(variable){
    if (variable == 0) {
      return 0;
    } else if (variable == 20) {
      return 1;
    } else if (variable == 40) {
      return 2;
    } else if (variable == 60) {
      return 3;
    } else if (variable == 80) {
      return 4;
    } else {
      return 5;
    }
  }
}
