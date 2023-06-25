const algaePalette = ["#AFE1AF", "#097969"];

interface Alga {
  position: Position;
  width: number;
  color: string;
  direction: number;
}

function drawAlgae(AlgaeArr: Alga[], windowHeight: number) {
  for (let oneAlga of AlgaeArr) {
    drawOneAlga(oneAlga, windowHeight);
  }
}

function drawOneAlga(oneAlga: Alga, windowHeight: number): void {
  fill(oneAlga.color);
  noStroke();
  rect(
    oneAlga.position.x,
    oneAlga.position.y,
    40,
    windowHeight - oneAlga.position.y + 10,
    10
  );
}

function generateOneAlga(windowWidth: number, windowHeight: number): Alga {
  const retAlga: Alga = {
    position: {
      x: random(windowWidth),
      y: random((windowHeight * 2) / 3, windowHeight),
    },
    width: random(10, 40),
    color: random(algaePalette),
    direction: random([1, -1]),
  };
  return retAlga;
}

//   function moveAlgae(algaArr: Alga[]): void {
//     for (const oneAlga of algaArr) {
//       moveAlga(oneAlga);
//     }
//   }

//   function moveAlga(oneAlga: Alga): void {
//     oneAlga.position.x += oneAlga.direction;
//     oneAlga.direction *= -1;
//   }
