import {cubicVolume} from "./js/calculations.js"
import {greet} from "./js/greeting.js"
import {checkTeenagerStatus} from "./js/teenager.js"
import {toggleBookmark} from "./js/utilities.js"

const volumeA = document.querySelector('[data-js="volumeA"]');
const volumeB = document.querySelector('[data-js="volumeB"]');
const volumeC = document.querySelector('[data-js="volumeC"]');
const volumeResult = document.querySelector('[data-js="volume-result"]');
const user = document.querySelector('[data-js="user"]');
const userResult = document.querySelector('[data-js="user-result"]');
const teenager = document.querySelector('[data-js="teenager"]');
const teenagerResult = document.querySelector('[data-js="teenager-result"]');

teenager.addEventListener('input', () => {
  teenagerResult.textContent = "You are: " + (checkTeenagerStatus(teenager.value) ? "a teenager" : "not a teenager");
})

user.addEventListener('input', () => {
  userResult.textContent = "Welcome message: " + greet(user.value)
})

volumeA.addEventListener('input', () => {
  volumeResult.textContent = "Result in m³: " + cubicVolume(+volumeA.value, +volumeB.value, +volumeC.value)
})

volumeB.addEventListener('input', () => {
  volumeResult.textContent = "Result in m³: " + cubicVolume(+volumeA.value, +volumeB.value, +volumeC.value)
})

volumeB.addEventListener('input', () => {
  volumeResult.textContent = "Result in m³: " + cubicVolume(+volumeA.value, +volumeB.value, +volumeC.value)
})