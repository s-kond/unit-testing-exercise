export function greet(name) {
  if(name === "Martin" || name === "Ernst" || name === "Marc"){
    return "Howdy Coach!"
  }
  if(name === "Dalia"){
    return "Howdy Boss!"
  }
  return `Howdy ${name}!`;
}
