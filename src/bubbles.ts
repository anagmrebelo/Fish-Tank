interface Bubble {
  position: Position;
  speed: number;
  diameter: number;
  color: string;
}

function drawBubbles(bubbleArr: Bubble[]) {
  for (let oneBubble of bubbleArr) {
    drawOneBubble(oneBubble);
  }
}

function drawOneBubble(oneBubble: Bubble): void {
  fill(oneBubble.color);
  circle(oneBubble.position.x, oneBubble.position.y, oneBubble.diameter);
}

function generateOneBubble(windowWidth: number, windowHeight: number): Bubble {
    const retBubble: Bubble = {
    position: {
      x: random(windowWidth),
      y: random(windowHeight),
    },
    speed: random(1, 3) * random([1, -1]),
    diameter: random(30, 100),
    color: random(fishPalette)
  };
  return retBubble;
}

function moveBubbles(bubbleArr: Bubble[], windowHeigh: number): void {
  for (const oneBubble of bubbleArr) {
    moveBubble(oneBubble, windowHeigh);
  }
}

function moveBubble(oneBubble: Bubble, windowHeigh: number): void {
  oneBubble.position.x += oneBubble.speed;
  if (oneBubble.position.y > windowWidth) {
    oneBubble.position.y= -5;
  }
}
