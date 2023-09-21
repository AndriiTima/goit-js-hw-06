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

// console.log(divEl);
// console.log(boxes);
// console.log(buttonEl);
// console.log(inEl);
// console.log(buttonElRemuve);

buttonEl.addEventListener("click", getAmount);
buttonElRemuve.addEventListener("click", destroyBoxes);

function getAmount() {
  let amount = parseInt(inEl.value);
  createBoxes(amount);
  console.log(amount);
}

function createBoxes(amount) {
  const basicNuber = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const size = basicNuber + i * 10;
    const div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()} `;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
