const fishPalette = ["#98ce00", "#16e0bd", "#78c3fb", "#89a6fb", "#98838f"];

interface Fish {
  position: Position;
  speed: number;
  diameter: number;
  tailSize: number;
  color: string;
}

interface Position {
  x: number;
  y: number;
}

function drawFishies(fishArr: Fish[]) {
  for (let fish of fishArr) {
    drawOneFish(fish);
  }
}

function drawOneFish(oneFish: Fish): void {
  fill(oneFish.color);
  circle(oneFish.position.x, oneFish.position.y, oneFish.diameter);
  drawOneFishTail(oneFish);
  drawOneFishEye(oneFish);
}

function drawOneFishTail(oneFish: Fish): void {
  const radius: number = oneFish.diameter / 2;
  const direction: number = oneFish.speed > 0 ? 1 : -1;
  const tailSize: number = random(radius);

  triangle(
    oneFish.position.x - radius * direction,
    oneFish.position.y,
    oneFish.position.x - radius * direction - oneFish.tailSize * direction,
    oneFish.position.y - radius * direction,
    oneFish.position.x - radius * direction - oneFish.tailSize * direction,
    oneFish.position.y + radius * direction
  );
}

function drawOneFishEye(oneFish: Fish): void {
  const radius: number = oneFish.diameter / 2;
  const offset: number = (1 / 2) * radius;
  const eyeSize: number = (1 / 5) * radius;
  const pupilSize: number = (1 / 2) * eyeSize;

  const direction: number = oneFish.speed > 0 ? 1 : -1;

  fill("white");
  circle(
    oneFish.position.x + offset * direction,
    oneFish.position.y - offset,
    eyeSize
  );
  fill("black");
  circle(
    oneFish.position.x + offset * direction,
    oneFish.position.y - offset,
    pupilSize
  );
}

function generateOneFish(windowWidth: number, windowHeight: number): Fish {
  const diameter = random(30, 100);

  const retFish: Fish = {
    position: {
      x: random(windowWidth),
      y: random(windowHeight),
    },
    speed: random(1, 3) * random([1, -1]),
    diameter,
    tailSize: random(diameter / 2),
    color: random(fishPalette),
  };
  return retFish;
}

function moveFishies(fishArr: Fish[], windowWidth: number): void {
  for (const fish of fishArr) {
    moveFish(fish, windowWidth);
  }
}

function moveFish(oneFish: Fish, windowWidth: number): void {
  oneFish.position.x += oneFish.speed;
  if (oneFish.position.x > windowWidth || oneFish.position.x < 0) {
    oneFish.speed *= -1;
  }
}
