import kaboom from "kaboom";

export const k = kaboom({
  global: false,
  touchToMouse: true,
  canvas: document.getElementById("game"),
  // fullscreen: true,
  // scale: 2,
  debug: true,
});
