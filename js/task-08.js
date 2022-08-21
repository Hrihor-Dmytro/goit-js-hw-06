// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том,
//     что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей
//  в обьект, где имя поля будет именем свойства, а значение поля - значением
// свойства.Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей
// формы методом reset.

const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const dataMail = formElements.email.value;
  const dataPassword = formElements.password.value;

  const formData = {
    dataMail,
    dataPassword,
  };
  console.log(formData);

  if (dataMail === "" || dataPassword === "") {
    alert("Нужно заполнить все поля");
  } else {
    console.log(`Email: ${dataMail}, Password: ${dataPassword}`);
    event.currentTarget.reset();
  }
}

// function handleSubmit(event) {
//   event.preventDefault();
//   const formData = new FormData(event.currentTarget);
//   formData.forEach((x, y) => {
//     if (x === "" || y === "") {
//       console.warn("Нужно заполнить все поля");
//     } else {
//       console.log(`Login: ${x}, Password: ${x}`);
//     }
//     event.currentTarget.reset();
//   });
// }
