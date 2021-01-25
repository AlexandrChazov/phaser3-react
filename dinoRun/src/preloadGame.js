import platform from './assets/platform.png';
import dino from './assets/dino.png';
import dino_jump from './assets/dino_jump.png';
import dino_fall from './assets/dino_fall.png';
import coin from './assets/coin.png';
import fire from './assets/fire.png';
import mountain from './assets/mountain.png';


// preloadGame scene
class preloadGame extends Phaser.Scene{
  constructor(){
      super("PreloadGame");
  }

  preload(){
      this.load.image("platform", platform);

      // player is a sprite sheet made by 24x48 pixels
      this.load.spritesheet("player", dino, {
        frameWidth: 100,
        frameHeight: 93
    });

    this.load.spritesheet("jump", dino_jump, {
      frameWidth: 100,
      frameHeight: 93
    });

    this.load.spritesheet("fall", dino_fall, {
      frameWidth: 110,
      frameHeight: 102
    });

    // the coin is a sprite sheet made by 20x20 pixels
    this.load.spritesheet("coin", coin, {
        frameWidth: 20,
        frameHeight: 20
    });

    // the firecamp is a sprite sheet made by 32x58 pixels
    this.load.spritesheet("fire", fire, {
        frameWidth: 40,
        frameHeight: 70
    });

    // mountains are a sprite sheet made by 512x512 pixels
    this.load.spritesheet("mountain", mountain, {
        frameWidth: 512,
        frameHeight: 512
    });
  }
  create(){

      // setting player animation
      this.anims.create({
          key: "run",
          frames: this.anims.generateFrameNumbers("player", {
              start: 0,
              end: 8
          }),
          frameRate: 16,
          repeat: -1
      });

      this.anims.create({
        key: "jump",
          frames: this.anims.generateFrameNumbers("jump", {
              start: 0,
              end: 12
          }),
          frameRate: 20,
          repeat: 0
      })

      this.anims.create({
        key: "fall",
          frames: this.anims.generateFrameNumbers("fall", {
              start: 0,
              end: 5
          }),
          frameRate: 10,
          repeat: 0
      })

      // setting coin animation
      this.anims.create({
          key: "rotate",
          frames: this.anims.generateFrameNumbers("coin", {
              start: 0,
              end: 5
          }),
          frameRate: 15,
          yoyo: true,
          repeat: -1
      });

      // setting fire animation
      this.anims.create({
          key: "burn",
          frames: this.anims.generateFrameNumbers("fire", {
              start: 0,
              end: 3
          }),
          frameRate: 15,
          repeat: -1
      });

      this.scene.start("PlayGame");
  }
}

export default preloadGame;
