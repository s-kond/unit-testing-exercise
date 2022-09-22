export function greet(name) {
  if(["Marc", "Martin", "Ernst"].includes(name)){
    return "Howdy Coach!"
  }
  if(name === "Dalia"){
    return "Howdy Boss!"
  }
  return `Howdy ${name}!`;
}
