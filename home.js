"use strict";

const cart = document.querySelector(".cart");
cart.addEventListener("click", () => {
  const activeCart = document
    .querySelector(".cartSection")
    .classList.toggle("activeCart");
});
