import Phaser from "phaser";

import Loading from "./Loading";
import Scene1 from "./Scene1";
import Scene2 from "./Scene2";
import Scene3 from "./Scene3";
import Scene4 from "./Scene4";

const config = {
  width: 600,
  height: 600,
  backgroundColor: 0x000000,
  scene: [Loading, Scene1, Scene2, Scene3, Scene4],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
};

const game = new Phaser.Game(config);

export default game;
