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
  let canvasRect = document.querySelector("my-canvas");
  let ctxRect = canvasRect.getContext("2d");
  ctxRect.beginPath();
  ctxRect.rect(x, y, w, h);
  ctxRect.fillStyle = "grey";
  ctxRect.fill();
}
drawBlock(100, 190, 150, 20);

function rectCollide(rect1, rect2) {
  if (
    block.x < block.x + block.w &&
    block.x + block.w > rect2.x &&
    rect1.y + rect1.h > rect2.y &&
    rect1.y < rect2.y + rect2.h
  ) {
    return true;
  } else {
    return false;
  }
}
