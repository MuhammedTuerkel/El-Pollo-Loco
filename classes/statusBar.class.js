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

  endBossBar = [
    "img/7_statusbars/2_statusbar_endboss/1_Hit_Left-removebg-preview.png",
    "img/7_statusbars/2_statusbar_endboss/2_Hits_Left-removebg-preview.png",
    "img/7_statusbars/2_statusbar_endboss/3_Hits_Left-removebg-preview.png",
    "img/7_statusbars/2_statusbar_endboss/4_Hits_Left-removebg-preview.png",
    "img/7_statusbars/2_statusbar_endboss/5_Hits_Left-removebg-preview.png"
  ];

  percentage = 100;
  coins = 0;
  salsaBottle = 0;
  endBoss = 100;

/** * loads everything important at the beginning when the class loads */
  constructor(path, x, y) {
    super();
    this.loadImages(this.liveHeart);
    this.loadImages(this.coinsBar);
    this.loadImages(this.salsaBottleBar);
    this.loadImages(this.endBossBar)
    this.y = y;
    this.x = x;
    this.width = 250;
    this.height = 70;
    this.setAllToDefault(path);
  }

/** * set everything to Default at the beginning of the class */
  setAllToDefault(path) {
    if (path == "energy") {
      this.setEnergyInTheStatusbar(100);
    } else if (path == "coins") {
      this.setCoinsInTheStatusBar(0);
    } else if (path == "salsabottle") {
      this.setSalsabottleInTheStatusbar(0);
    }else if ( path == "endboss"){
this.setEndbossInTheStatusbar(100);
    }
  }

/** * set the amount of coins to the statusbar */
  setCoinsInTheStatusBar(coins) {
    this.coins = coins;
    let imagePath = this.coinsBar[this.getNumForCoins(this.coins)];
    this.img = this.imageChace[imagePath];
  }

/** * set the amount of salsabottle to the statusbar */
  setSalsabottleInTheStatusbar(salsaBottle) {
    this.salsaBottle = salsaBottle;
    let imagePath =
      this.salsaBottleBar[this.getNumForSalsaBottle(this.salsaBottle)];
    this.img = this.imageChace[imagePath];
  }

/** * set the amount of energy to the statusbar */
  setEnergyInTheStatusbar(percentage) {
    this.percentage = percentage;
    let imagePath = this.liveHeart[this.getNumForEnergy(this.percentage)];
    this.img = this.imageChace[imagePath];
  }

  /** * set the health of the endboss in the statusbar */
  setEndbossInTheStatusbar(health){
    this.endBoss = health;
    let imagePath = this.endBossBar[this.getNumForEndboss(this.endBoss)];
    this.img = this.imageChace[imagePath];
  }

/** * get the right JSON ARRAY number for energy */
  getNumForEnergy(variable) {
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

/** * get the right JSON ARRAY number for Coins */
  getNumForCoins(variable) {
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

/** * get the right JSON ARRAY number for salsabottle */
  getNumForSalsaBottle(variable) {
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

  /** * health of endboss */
  getNumForEndboss(variable){
    if (variable == 100) {
      return 4;
    } else if (variable == 80) {
      return 3;
    } else if (variable == 60) {
      return 2;
    } else if (variable == 40) {
      return 1;
    }else if (variable == 20) {
      return 0;
    }else{
      return 0;
    }
  }
}
