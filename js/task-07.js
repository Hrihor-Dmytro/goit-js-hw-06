// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет инлайн - стиль
// span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const fontSizeControl = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

fontSizeControl.addEventListener("input", () => {
  textSize.style.fontSize = fontSizeControl.value + "px";
});
console.log(fontSizeControl);
