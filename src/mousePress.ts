function mousePressed() {
  if (isCollision(mouseX, mouseY, fishArr, collidesFish, changeFishDirection))
    return;
  if (isCollision(mouseX, mouseY, bubbleArr, collidesBubble, popBubble)) return;
}

function isCollision<T>(
  mouseX: number,
  mouseY: number,
  searchArr: T[],
  searchFunction: (x: number, y: number, oneItem: T) => boolean,
  changeFunction: (oneItem: T, index: number) => void
): boolean {
  for (const itemIndex in searchArr) {
    if (searchFunction(mouseX, mouseY, searchArr[itemIndex])) {
      changeFunction(searchArr[itemIndex], parseInt(itemIndex));
      return true;
    }
  }
  return false;
}

// Change Functions
function changeFishDirection(oneFish: Fish, index: number): void {
  oneFish.speed *= -1;
}

function popBubble(oneBubble: Bubble, index: number): void {
  bubbleArr.splice(index, 1);
  mySound.setVolume(0.5);
  mySound.play();
}

// Search Functions
function collidesFish(mouseX: number, mouseY: number, oneFish: Fish) {
  const distanceToMouse = distance({ x: mouseX, y: mouseY }, oneFish.position);
  const margin = 10;
  if (distanceToMouse <= oneFish.diameter / 2 + margin) return true;
  return false;
}

function collidesBubble(mouseX: number, mouseY: number, oneBubble: Bubble) {
  const distanceToMouse = distance(
    { x: mouseX, y: mouseY },
    oneBubble.position
  );

  const margin = 25;
  if (distanceToMouse <= oneBubble.diameter / 2 + margin) return true;
  return false;
}
