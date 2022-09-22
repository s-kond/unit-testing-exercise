import { cubicVolume } from "./calculations";

const testData = [
    [12, 3, 4, 144],
    [2, 0, 4, 0],
    [3, -3, -3, 0],
    [-2, -3, -4, 0],
    [-2, 3, 4, 0],
    [3, -5, 22, 0],
    [55, 55, -11, 0]
  ]
  
  test.each(testData)("returns correct cubic volume", (inputLength, inputWidth, inputDepth, result) => {
    expect(cubicVolume(inputLength, inputWidth, inputDepth)).toEqual(result);
  })