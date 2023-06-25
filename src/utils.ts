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
  