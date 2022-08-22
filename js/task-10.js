// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов в input и нажимает кнопку Создать,
//   после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число.Функция создает столько < div >,
//   сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.Используй готовую функцию getRandomHexColor для получения цвета.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");
const createBox = document.querySelector("[data-create]");
const destroyBox = document.querySelector("[data-destroy]");
const divEl = document.querySelector("#boxes");
let amount = 0;

inputEl.addEventListener("input", inputChenge);

function inputChenge(event) {
  event.preventDefault();
  amount = event.currentTarget.value;
}
createBox.addEventListener("click", () => {
  const arrAmount = [];
  let sizeElement = 10;

  for (let i = 0; i < amount; i += 1) {
    const createElement = document.createElement("div");
    sizeElement += 10;
    createElement.style.width = `${sizeElement}px`;
    createElement.style.height = `${sizeElement}px`;
    createElement.style.backgroundColor = getRandomHexColor();
    arrAmount.push(createElement);
  }
  divEl.append(...arrAmount);
});

destroyBox.addEventListener(`click`, () => {
  divEl.innerHTML = "";
});
