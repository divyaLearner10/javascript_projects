const btnElement = document.querySelector("button");
const spanValue = document.getElementsByClassName("color");
const body = document.getElementsByTagName("body")

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

function changeColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const bgColor = colors[randomIndex];
  spanValue[0].textContent = bgColor;
  body[0].style.backgroundColor = bgColor;
}
btnElement.addEventListener('click', changeColor)
