const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");
let count = document.getElementById("count");

function decreaseCounter() {
  count.textContent -= 1;
}

function resetCounter() {
  count.textContent = 0;
}

function increaseCounter() {
  count.textContent++ ;
}


decreaseBtn.addEventListener('click', decreaseCounter);
resetBtn.addEventListener('click', resetCounter);
increaseBtn.addEventListener('click', increaseCounter);
