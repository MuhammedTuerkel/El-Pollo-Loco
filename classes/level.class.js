class level {
  enemies;
  clouds;
  backgroundObjects;
  coins;
  salsabottle;
  gameover;
  levelEndX = 1530;

/** * loads everything important at the beginning when the class loads */
  constructor( enemies, clouds, backgroundObjects, coins, salsabottle, gameover ) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.backgroundObjects = backgroundObjects;
    this.coins = coins;
    this.salsabottle = salsabottle;
    this.gameover = gameover;
  }
}
