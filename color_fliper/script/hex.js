const btnElement = document.querySelector("button");
const spanValue = document.getElementsByClassName("color");
const body = document.getElementsByTagName("body")

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function changeColor() {
  let hexValue = "#";

  for(let i = 0; i < 6; i++) {
    const hexIndex = Math.floor(Math.random() * hex.length);
    hexValue += hex[hexIndex];
  }

  spanValue[0].textContent = hexValue;
  body[0].style.backgroundColor = spanValue[0].textContent;
}
console.log(spanValue);
btnElement.addEventListener('click', changeColor)
