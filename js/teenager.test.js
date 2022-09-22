import { checkTeenagerStatus } from "./teenager.js";

/* test("returns correct teenager status", () => {
  const teenagerStatus = checkTeenagerStatus(15);
  expect(teenagerStatus).toBe(true);
}); */

const testData = [
  [12, true],
  [20, true],
  [15, true],
  [8, false],
  [22, false],
  [0, false]
]

test.each(testData)("returns correct teenager status", (inputAge, expectedValue) => {
  expect(checkTeenagerStatus(inputAge)).toEqual(expectedValue);
})