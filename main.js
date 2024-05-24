// Canvas Sandbox

// Canvas Setup
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let rectX = 20;
let rectY = 350;
let size = 30;

let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;
let ArrowUp = false;
let ArrowDown = false;
let ArrowLeft = false;
let ArrowRight = false;

let walls = [];
walls.push({ 
  x: -1, 
  y: 100,
  w: 150,
  h: 20 
});

walls.push({ 
  x: 356, 
  y: 200, 
  w: 20,
  h: 150 
});

walls.push({ 
  x: 500, 
  y: 100, 
  w: 190, 
  h: 20 
});

walls.push({ 
  x: 500, 
  y: 450, 
  w: 160, 
  h: 20 
});

walls.push({
   x: 160, 
   y: 500, 
   w: 120, 
   h: 20 
  });

// Draw Function
window.addEventListener("load", draw);

function draw() {
  // Draw Player
  ctx.fillStyle = "blue"
  ctx.fillRect(rectX, rectY, size, size,)
  
  // Draw Walls
  ctx.fillStyle = "grey"
  for (let i = 0; i < walls.length; i++) {
    let wall = walls[i]
    ctx.fillRect(wall.x, wall.y, wall.w, wall.h);
  }

  for (let i = 0; i < walls.length; i++) {
      let wall = walls[i];
      if (
        rectX < wall.x + wall.w &&
        rectX + size > wall.x &&
        rectY < wall.y + wall.h &&
        rectY + size > wall.y
      ) {
        rectX = 20;
        rectY = 300;
      }
    }  

    if (rectX < 0 ||
      rectX + size > cnv.width ||
      rectY < 0 ||
      rectY + size > cnv.height) {
        rectX = 20;
        rectY = 300;
      }
  
   requestAnimationFrame(draw);
}

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

  if (upPressed) {
    rectY -= 20;
  } else if (downPressed) {
    rectY += 20;
  } else if (leftPressed) {
    rectX -= 20;
  } else if (rightPressed) {
    rectX += 20;
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




//   player.x = constrain(player.x, 0, cnv.width - player.w);
//   player.y = constrain(player.y, 0, cnv.height - player.h);
