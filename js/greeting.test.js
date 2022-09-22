import { greet } from "./greeting.js";

const testData = [
    ["Martin", "Howdy Coach!"],
    ["Marc", "Howdy Coach!"],
    ["Ernst", "Howdy Coach!"],
    ["Dalia", "Howdy Boss!"],
    ["Luigi", "Howdy Luigi!"],
    ["Peach", "Howdy Peach!"]
];

test.each(testData)("returns correct greeting", (inputName, expectedResult) => {
    expect(greet(inputName)).toEqual(expectedResult);
});