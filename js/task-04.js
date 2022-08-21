// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const counterValue = document.querySelector("#value");
const decrementEl = document.querySelector(`[data-action="decrement"]`);
const incrementEl = document.querySelector(`[data-action="increment"]`);

let valueEl = 0;

decrementEl.addEventListener(`click`, () => {
  valueEl -= 1;
  counterValue.innerHTML = valueEl;
});
incrementEl.addEventListener(`click`, () => {
  valueEl += 1;
  counterValue.innerHTML = valueEl;
});
