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

let block = {
  x: 100,
  y: 190,
  w: 150,
  h: 20,
};

let rect1 = {
  x: 50,
  y: 60,
  w: 50,
  h: 70,
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
  player.x = constrain(player.x, 0, cnv.width - player.w);
  player.y = constrain(player.y, 0, cnv.height - player.h);
  player.x = constrain(player.x, rect1.x, rect1.x + rect1.w);
  player.y = constrain(player.y, rect1.y, rect1.h + rect1.y);

  
  if (rectCollide[player, rect1]) {
    console.log("Rect")
  }

  // DRAWING
   drawFrame();
  // Animation Loop
  requestAnimationFrame(draw);
}

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

function drawFrame() {
  ctx.clearRect(0, 0, cnv.width, cnv.height);
  

  // // Background
  // ctx.fillStyle = "white";
  // ctx.fillRect(0, 0, cnv.width, cnv.height);
  
  // Block
  drawBlock(rect1.x, rect1.y, rect1.w, rect1.h);
  
  //   Draw Player
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.w, player.h);

}