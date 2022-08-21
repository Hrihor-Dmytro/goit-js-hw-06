const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories:`, numberOfCategories.length);

numberOfCategories.forEach(function (catEl) {
  console.log(`Category:`, catEl.firstElementChild.textContent);
  console.log(`Elements:`, catEl.lastElementChild.children.length);
});

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
