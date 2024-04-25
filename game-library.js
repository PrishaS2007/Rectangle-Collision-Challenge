// EVENT STUFF

function constrain(val, low, high) {
  if (val < low) {
    return low;
  } else if (val > high) {
    return high;
  } else {
    return val;
  }
}

function drawBlock(x, y, w, h) {
  ctx.fillStyle = "grey";
  ctx.fillRect(x, y, w, h);
}

// function rectCollide(rect1, rect2) {
//   if (
//     rect1.x < rect2.x + rect2.w &&
//     rect1.x + rect1.w > rect2.x &&
//     rect1.y + rect1.h > rect2.y &&
//     rect1.y < rect2.y + rect2.h
//   ) {
//     console.log("true");
//     return true;
//   } else {
//     console.log("false");
//     return false;
//   }
// }
function rectCollide() {
  for (let i = 0; i < walls.length; i++) {
    let wall = walls[i];
    if (
      rectX < wall.x + wall.w &&
      rectX + size > wall.x &&
      rectY < wall.y + wall.h &&
      rectY + size > wall.y
    ) {
      return true;
    } else {
      return false;
    }
  }

  if (
    rectX < 0 ||
    rectX + size > cnv.width ||
    rectY < 0 ||
    rectY + size > cnv.height
  ) {
    return true;
  } else {
    return false;
  }
}
