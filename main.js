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

// let block = {
//   x: 100,
//   y: 190,
//   w: 150,
//   h: 20,
// };

let rectX = 20;
let rectY = 350;
let size = 30;

let walls = [];
walls.push({ x: -1, y: 100, w: 150, h: 20 });
walls.push({ x: 356, y: 200, w: 20, h: 150 });
walls.push({ x: 500, y: 100, w: 190, h: 20 });
walls.push({ x: 500, y: 450, w: 160, h: 20 });
walls.push({ x: 160, y: 500, w: 120, h: 20 });

// let rect1 = {
//   x: -1,
//   y: 100,
//   w: 150,
//   h: 20,
// };

// let rect2 = {
//   x: 356,
//   y: 200,
//   w: 20,
//   h: 150,
// };

// let rect3 = {
//   x: 500,
//   y: 100,
//   w: 190,
//   h: 20,
// };

// let rect4 = {
//   x: 500,
//   y: 450,
//   w: 160,
//   h: 120,
// };

// let rect5 = {
//   x: 160,
//   y: 500,
//   w: 120,
//   h: 20,
// };

// let rect6 = {
//   x: 600,
//   y: 180,
//   w: 20,
//   h: 150,
// };

// let rect7 = {
//   x: 156,
//   y: 250,
//   w: 20,
//   h: 150,
// };

// let rect8 = {
//   x: 300,
//   y: 50,
//   w: 100,
//   h: 20,
// };

// let rect9 = {
//   x: 400,
//   y: 460,
//   w: 20,
//   h: 150,
// };

let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

// Draw Function
window.addEventListener("load", draw);

// Event Listeners & Handlers
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

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

function draw() {
  // LOGIC
  // Move Player
  if (rightPressed) {
    player.x += player.speed;
  } else if (leftPressed) {
    player.x += -player.speed;
  } else if (upPressed) {
    player.y += -player.speed;
  } else if (downPressed) {
    player.y += player.speed;
  }
  player.x = constrain(player.x, 0, cnv.width - player.w);
  player.y = constrain(player.y, 0, cnv.height - player.h);

  if (rectCollide(player, walls)) {
    document.body.style.backgroundColor = "lightgrey";
  } else {
    document.body.style.backgroundColor = "white";
  }
  console.log(rectCollide);
  // DRAWING
  drawFrame();
  // Animation Loop
  requestAnimationFrame(draw);
}

function drawFrame() {
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  //  Draw Block
  drawBlock(-1, 100, 150, 20);
  drawBlock(356, 200, 20, 150);
  drawBlock(500, 100, 190, 20);
  drawBlock(500, 450, 160, 20);
  drawBlock(160, 500, 120, 20);
  // drawBlock(600, 180, 20, 150);
  // drawBlock(156, 250, 20, 150);
  // drawBlock(300, 50, 100, 20);
  // drawBlock(400, 460, 20, 150);

  //   Draw Player
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.w, player.h);
}
