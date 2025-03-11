const level1 = new level(
    enemies = [
        new Chicken("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png"),
        new Chicken("img/3_enemies_chicken/chicken_small/1_walk/1_w.png"),
        new Chicken("img/4_enemie_boss_chicken/1_walk/G1.png"),
        new endBoss("img/4_enemie_boss_chicken/2_alert/G5.png")
      ],
      clouds = [
        new clouds("img/5_background/layers/4_clouds/1.png", 0),
        new clouds("img/5_background/layers/4_clouds/2.png", 719)
      ],
      backgroundObjects = [
        new backgroundObject("img/5_background/layers/air.png", 0),
        new backgroundObject("img/5_background/layers/3_third_layer/1.png", 0),
        new backgroundObject("img/5_background/layers/2_second_layer/1.png", 0),
        new backgroundObject("img/5_background/layers/1_first_layer/1.png", 0),
        new backgroundObject("img/5_background/layers/air.png", 719),
        new backgroundObject("img/5_background/layers/3_third_layer/2.png", 719),
        new backgroundObject("img/5_background/layers/2_second_layer/2.png", 719),
        new backgroundObject("img/5_background/layers/1_first_layer/2.png",719),
        new backgroundObject("img/5_background/layers/air.png", 719 *2),
        new backgroundObject("img/5_background/layers/3_third_layer/1.png", 719 *2),
        new backgroundObject("img/5_background/layers/2_second_layer/1.png", 719 *2),
        new backgroundObject("img/5_background/layers/1_first_layer/1.png",719 *2),
      ],
      coins = [
        new coin("img/8_coin/coin_2.png", 300),
        new coin("img/8_coin/coin_2.png", 600),
        new coin("img/8_coin/coin_2.png", 900),
        new coin("img/8_coin/coin_2.png", 1000),
        new coin("img/8_coin/coin_2.png", 1300),
      ],

  salsaBottle = [
    new salsaBottle("img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 500),
    new salsaBottle("img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 800),
    new salsaBottle("img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 1000),
    new salsaBottle("img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 1100),
    new salsaBottle("img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 1500),
  ],

  gameover = [
    new gameOver("img/9_intro_outro_screens/game_over/game over!.png"),
    new gameOver("img/9_intro_outro_screens/game_over/game over!.png"),
    new gameOver("img/9_intro_outro_screens/game_over/oh no you lost!.png"),
    new gameOver("img/9_intro_outro_screens/game_over/you lost.png"),
  ]
);