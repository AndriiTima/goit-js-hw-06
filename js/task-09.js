// Задание 9
// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль при клике
// на button.change - color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.

/**
  |====================================================================
  |                           solutin
  |====================================================================
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const changeSpan = document.querySelector(".color");

changeColorBtn.addEventListener("click", function (event) {
  const colorBackground = getRandomHexColor();
  document.body.style.backgroundColor = colorBackground;
  changeSpan.textContent = colorBackground;
});