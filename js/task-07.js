// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text
//  обновляя свойство font - size.В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

/**
  |========================================================
  |                            solution
  |========================================================
*/
const inputEl = document.querySelector("#font-size-control");
const spanTex = document.querySelector("#text");

inputEl.addEventListener("input", onInput);

function onInput() {
  const valueIn = inputEl.value;
  spanTex.style.fontSize = valueIn + "px";
  console.log(valueIn);
}
onInput();
