import scene from "./Scenes/index";

const config = {
  width: 600,
  height: 600,
  backgroundColor: 0x000000,
  scene,
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
};

export default config;
