// Задание 8
// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем
// свойства, а значение поля - значением свойства.Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.
/**
  |==========================================================
  |                            solution
  |==========================================================
*/
const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);
function onSubmit(event) {
  event.preventDefault();
  console.dir(form);
  // form.elements.email.addEventListener("input", onInputEmail);
  // form.elements.password.addEventListener("input", onInputPass);

  // function onInputEmail(event) {
  //   let inputValeu = event.target.value;
  //   console.log(event.target.value);
  // }
  // function onInputPass(event) {
  //   let inputPass = event.target.value;
  //   console.log(event.target.value);
  // }
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені!");
  }
  const data = {
    email: email.value,
    password: password.value,
  };

  console.dir(data);
  form.reset();
}
