import _Scene from "./_Scene";

class Scene1 extends _Scene {
  constructor() {
    super("bootGame");
  }
  preload() {}
  create() {
    this.startGame();
  }

  update() {}

  startGame() {
    this.scene.start("playGame");
  }
}

export default Scene1;
