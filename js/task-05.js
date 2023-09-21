/**
  |=====================================================
  |                     task 5
  |=====================================================
*/
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет
// его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

/**
  |====================================================
  |                        solution
  |====================================================
*/
const inName = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output");
let ananimus = "Anonymous";

inName.addEventListener("input", onInput);
function onInput(event) {
  spanName.textContent = event.target.value.trim() || ananimus;
}
