let fishArr: Fish[];
let bubbleArr: Bubble[];

function setup() {
  createCanvas(windowWidth, windowHeight);
  fishArr = collect(windowWidth, windowHeight, 10, generateOneFish);
  bubbleArr = collect(windowWidth, windowHeight, 30, generateOneBubble);
}

function draw() {
  background("blue");
  drawFishies(fishArr);
  moveFishies(fishArr, windowWidth);
}

function mousePressed() {
  redraw();
}
