/**
  |========================================================================================
  |                                        solution
  |========================================================================================
*/
// const divEl = document.getElementById("controls");
const boxes = document.getElementById("boxes");
const inEl = document.querySelector("input");
const buttonEl = document.querySelector("button[data-create]");
const buttonElRemuve = document.querySelector("button[data-destroy]");
const stepInput = Number(inEl.step);
buttonEl.addEventListener("click", getAmount);
buttonElRemuve.addEventListener("click", destroyBoxes);

function getAmount() {
  let amount = parseInt(inEl.value);
  const minInput = Number(inEl.min);
  const maxInput = Number(inEl.max);

  if (amount > maxInput || amount < minInput) {
    alert("Please enter number from 1 to 100");
  } else {
    createBoxes(amount);
  }
}

function createBoxes(amount) {
  let size = 30;
  const boxesArr = [];
  for (let i = 0; i < amount; i += stepInput) {
    size += 10 * i;
    const div = `<div class="item" style="display: block; margin-right: 20px; margin-bottom: 20px; background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
    boxesArr.push(div);
  }
  boxes.insertAdjacentHTML("beforeend", boxesArr.join(""));
}

function destroyBoxes() {
  boxes.innerHTML = "";
  inEl.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
