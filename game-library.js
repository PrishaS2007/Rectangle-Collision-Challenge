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
