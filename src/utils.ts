function collect<T>(
  windowWidth: number,
  windowHeight: number,
  amount: number,
  generateFunction: (windowWidth: number, windowHeigh: number) => T
): T[] {
  const retArr: T[] = [];

  for (let tNb = 0; tNb < amount; tNb++) {
    retArr.push(generateFunction(windowWidth, windowHeight));
  }
  return retArr;
}

function distance(pos1: Position, pos2: Position): number {
  const x = pos1.x - pos2.x;
  const y = pos1.y - pos2.y;
  return Math.sqrt(x * x + y * y);
}
