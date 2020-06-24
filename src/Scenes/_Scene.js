import Phaser from "phaser";

class _Scene extends Phaser.Scene {
  init() {
    this.centerX = this.game.config.width / 2;
    this.centerY = this.game.config.height / 2;
  }
}

export default _Scene;
