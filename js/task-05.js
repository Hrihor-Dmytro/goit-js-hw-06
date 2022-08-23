// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

const onChengeInput = document.querySelector("#name-output");
const input = document.querySelector("#name-input");

input.addEventListener("input", chengeInput);

function chengeInput(event) {
  if (event.currentTarget.value === "") {
    onChengeInput.textContent = "Anonymous";
  } else {
    onChengeInput.textContent = event.currentTarget.value;
    console.log(onChengeInput);
  }
}
