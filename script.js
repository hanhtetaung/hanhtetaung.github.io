document.addEventListener("DOMContentLoaded", () => {
  const firstItem = document.querySelector(".tech-collection__item");
  const columnWidth =
    Math.round(parseFloat(getComputedStyle(firstItem).width)) / 2;

  const msnry = new Masonry(".tech-collection__list", {
    itemSelector: ".tech-collection__item",
    columnWidth,
    horizontalOrder: true,
  });
});
