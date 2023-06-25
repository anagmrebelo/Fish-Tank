let fishArr: Fish[];
let bubbleArr: Bubble[];
let algaArr: Alga[];

let mySound: any;

// function preload() {
//   mySound = loadSound("sounds/bubble.mp3");
// }

function setup() {
  createCanvas(windowWidth, windowHeight);

  fishArr = collect(windowWidth, windowHeight, 20, generateOneFish);
  bubbleArr = collect(windowWidth, windowHeight, 40, generateOneBubble);
  algaArr = collect(windowWidth, windowHeight, 250, generateOneAlga);
}

function draw() {
  background("#6daedb");
  drawFishies(fishArr);
  drawBubbles(bubbleArr);
  drawAlgae(algaArr, windowHeight);
  moveFishies(fishArr, windowWidth);
  moveBubbles(bubbleArr, windowHeight);
}
