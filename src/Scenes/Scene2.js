import _Scene from "./_Scene";

class Scene2 extends _Scene {
  constructor() {
    super("playGame");
  }
  create() {
    console.log(this.centerX, this.centerY);
  }

  update() {}

  endGame() {
    this.scene.start("endGame");
  }
  winner() {
    this.scene.start("winGame");
  }
}

export default Scene2;
