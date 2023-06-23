let fishArr: Fish[];

function setup() {
    createCanvas(windowWidth, windowHeight);
    fishArr = collect(windowWidth, windowHeight, 10);
    noLoop();
}

function draw() {
    background("white");
    drawFishes(fishArr);
}

function mousePressed() {
    redraw();
}
