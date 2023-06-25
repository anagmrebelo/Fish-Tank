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
    speed: random(1, 3),
    diameter: random(20, 30),
    color: "rgba(255,255,255, 0.25)",
  };
  return retBubble;
}

function moveBubbles(bubbleArr: Bubble[], windowHeigh: number): void {
  for (const oneBubble of bubbleArr) {
    moveBubble(oneBubble, windowHeigh);
  }
}

function moveBubble(oneBubble: Bubble, windowHeigh: number): void {
  oneBubble.position.y -= oneBubble.speed;
  if (oneBubble.position.y < 0) {
    oneBubble.position.y = windowHeigh + 5;
  }
}
