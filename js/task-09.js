// Напиши скрипт, который изменяет цвета фона элемента < body >
// через инлайн стиль при клике на button.change - color
// и выводит значение цвета в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");

btnEl.addEventListener("click", changeBgColor);

function changeBgColor() {
  const changeColor = getRandomHexColor();
  bodyEl.style.backgroundColor = changeColor;
  spanEl.textContent = changeColor;
  console.log(changeBgColor);
}
