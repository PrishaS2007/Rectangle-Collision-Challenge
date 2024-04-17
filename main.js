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

let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

// Draw Function
window.addEventListener("load", draw);

function draw() {
  // LOGIC
  if (rightPressed) {
    player.x += player.speed;
  } else if (leftPressed) {
    player.x += -player.speed;
  } else if (upPressed) {
    player.y += -player.speed;
  } else if (downPressed) {
    player.y += player.speed;
  }

  // DRAWING
  // Background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  //   Draw Player
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.w, player.h);

  // Draw Blocks
  ctx.fillStyle = "grey";
  ctx.fillRect(100, 190, 150, 20);
  ctx.fillStyle = "grey";
  ctx.fillRect(300, 100, 150, 20);
  ctx.fillStyle = "grey";
  ctx.fillRect(500, 190, 20, 200);
  ctx.fillStyle = "grey";
  ctx.fillRect(280, 300, 20, 200);
  ctx.fillStyle = "grey";
  ctx.fillRect(580, 200, 150, 20);
  // Animation Loop
  requestAnimationFrame(draw);
}

// EVENT STUFF
document.addEventListener("keydown", keydownHandler);

function keydownHandler(e) {
  if (e.code === "ArrowLeft") {
    leftPressed = true;
  } else if (e.code === "ArrowRight") {
    rightPressed = true;
  } else if (e.code === "ArrowUp") {
    upPressed = true;
  } else if (e.code === "ArrowDown") {
    downPressed = true;
  }
}

document.addEventListener("keyup", keyupHandler);

function keyupHandler(e) {
  if (e.code === "ArrowLeft") {
    leftPressed = false;
  } else if (e.code === "ArrowRight") {
    rightPressed = false;
  } else if (e.code === "ArrowUp") {
    upPressed = false;
  } else if (e.code === "ArrowDown") {
    downPressed = false;
  }
}

function constrain(val, low, high) {
  if (val < low) {
    return low;
  } else if (val > high) {
    return high;
  } else {
    return val;
  }
}

function drawBlock() {}
