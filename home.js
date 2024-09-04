"use strict";

const cartiew = document.querySelector(".cart");
cartiew.addEventListener("click", () => {
  const activeCart = document
    .querySelector(".cartSection")
    .classList.toggle("activeCart");
});

let cart = [];
const handleAddRoCArt = () => {
  const addCartBtn = document.querySelectorAll(".addToCartBtn");
  addCartBtn.forEach((button) => {
    button.addEventListener("click", () => {
      let productCard = button.closest(".productItem");
      const productImage = productCard.querySelector(".prodImage").src;
      const productTitle = productCard.querySelector(".productTitle").innerHTML;
      const productDescription = productCard.querySelector(
        ".productDescription"
      ).innerHTML;
      const productPrice = productCard.querySelector(".productPrice").innerHTML;

      let product = {
        productImage,
        productTitle,
        productDescription,
        productPrice,
      };

      cart.push(product);
      handlecartCount(cart);
      handleCartDisplay(cart);
    });
  });
};

handleAddRoCArt();

const handlecartCount = (cart) => {
  const countCart = document.querySelector(".number");
  countCart.textContent = cart.length;
};

const handleCartDisplay = (cart) => {
  const cardsection = document.querySelector(".cartSection");

  cardsection.innerHTML = "";

  cart.forEach((cartItem) => {
    const CartContent = `
        <div class="cartProduct">
          <div class="image">
            <img src="${cartItem.productImage}" alt="" />
          </div>
          <div class="details">
            <h1>${cartItem.productTitle}</h1>
            <p>${cartItem.productDescription}</p>
            <div class="price">
              <h1>${cartItem.productPrice}</h1>
            </div>
          </div>
        </div>
      `;
    cardsection.insertAdjacentHTML("beforeend", CartContent);
  });
};
