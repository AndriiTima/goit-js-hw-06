const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const appendImg = document.querySelector(".gallery");
const marcup = images
  .map((item) => {
    return `<li><img src = "${item.url}" alt = "${item.alt}" width = "150" height = "100"></li>`;
  })
  .join("");
console.log(marcup);
appendImg.insertAdjacentHTML("afterbegin", marcup);
appendImg.style.display = "flex";
