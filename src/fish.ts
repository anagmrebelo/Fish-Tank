const fishPalette = ["#98ce00","#16e0bd","#78c3fb","#89a6fb","#98838f"]

interface Fish {
    position: Position,
    speed: number,
    size: number,
    color: string
}

interface Position {
    x: number;
    y: number;
}

function drawFishes(fishArr: Fish[]) {
    for (let fish of fishArr) {
        drawOneFish(fish);
    }
}

function drawOneFish(fish: Fish): void {
    fill(fish.color);
    circle(fish.position.x, fish.position.y, fish.size);
}

function generateOneFish(windowWidth: number, windowHeight: number): Fish {
    const retFish: Fish = {
        position: {
            x: random(windowWidth),
            y: random(windowHeight)
        },
        speed: random(100),
        size: random(100),
        color: random(fishPalette)
    }
    return retFish;
}

function collect(windowWidth: number, windowHeight: number, amount: number): Fish[] {
    const fishArr: Fish[] = [];

    for (let fishNb = 0; fishNb < amount; fishNb++) {
        fishArr.push(generateOneFish(windowWidth, windowHeight));
    }
    return fishArr;
}