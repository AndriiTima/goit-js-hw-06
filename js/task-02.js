const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
/**
  |=======================================================================================
  |                                       task 2
  |=======================================================================================
*/
// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

// const ulElement = document.querySelector("#ingredients");
// const appIngredients = ingredients.reduce(
//   (str, item) => str + `<li class = item>${item}</li>`,
//   ""
// );
// ulElement.innerHTML = appIngredients;

const parentElement = document.getElementById("ingredients");

const markup = ingredients.map((item) => {
  const liEl = document.createElement("li");
  liEl.textContent = item;
  liEl.classList.add("item");
  return liEl;
});
parentElement.append(...markup);
console.log(markup);
