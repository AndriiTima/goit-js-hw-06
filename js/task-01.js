const ulca = document.querySelectorAll("#categories>li");
console.log(ulca);
console.log(`Number of categories: ${ulca.length}`);

ulca.forEach((element) => {
  console.log(
    `Category: ${element.firstElementChild.textContent}, Elements: ${element.lastElementChild.children.length}`
  );
});
