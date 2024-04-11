// Canvas Sandbox

// Canvas Setup
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let player = {
  x: 400,
  y: 300,
  w: 25,
  h: 25,
  speed: 5,
  color: "blue",
};

// Draw Function
window.addEventListener("load", draw);

function draw() {
  // LOGIC

  // DRAWING
  // Background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  //   Draw Player
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.w, player.h);

  // Animation Loop
  requestAnimationFrame(draw);
}
