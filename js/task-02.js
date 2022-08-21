const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const listEl = document.createElement("li");

  listEl.textContent = ingredients[i];
  listEl.classList.add(`item`);
  ingredientsList.push(listEl);
}
const list = document.querySelector(`#ingredients`);
list.append(...ingredientsList);

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.
