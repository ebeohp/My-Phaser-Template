export default class playGame extends Phaser.Scene {
  constructor() {
    super("playGame");
  }
  create() {}

  update() {}

  endGame() {
    this.scene.start("endGame");
  }
  winner() {
    this.scene.start("winGame");
  }
}
