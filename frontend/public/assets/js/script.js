// 'use strict';

// /**
//  * Add event on elements
//  */
// /**
//  * Checkout functionality
//  */
// const checkoutButton = document.querySelector("[data-checkout]");

// const checkout = function() {
//   // Perform checkout logic here
//   console.log("Checkout initiated");
//   // Clear the cart after checkout
//   cart.length = 0;
//   updateCartUI();
// // Remove the extra closing brace

// addEventOnElem(checkoutButton, "click", checkout);

// /**
//  * Wishlist functionality
//  */
// const wishlist = [];
// const addToWishlistButtons = document.querySelectorAll("[data-add-to-wishlist]");

// const addToWishlist = function() {
//   const productId = this.dataset.productId;
//   const productName = this.dataset.productName;

//   const existingProductIndex = wishlist.findIndex(item => item.id === productId);

//   if (existingProductIndex === -1) {
//     const product = {
//       id: productId,
//       name: productName
//     };

//     wishlist.push(product);
//     console.log(`Added ${productName} to wishlist.`, wishlist);
//   } else {
//     console.log(`${productName} is already in the wishlist.`);
//   }
// };

// addEventOnElem(addToWishlistButtons, "click", addToWishlist);

// /**
//  * Frontend functions
//  */
// const toggleMenu = function() {
//   // Toggle the menu visibility
//   console.log("Menu toggled");
// };

// const toggleCart = function() {
//   // Toggle the cart visibility
//   console.log("Cart toggled");
// };

// const toggleWishlist = function() {
//   // Toggle the wishlist visibility
//   console.log("Wishlist toggled");
// };

// const menuButton = document.querySelector("[data-menu-toggle]");
// const cartButton = document.querySelector("[data-cart-toggle]");
// const wishlistButton = document.querySelector("[data-wishlist-toggle]");

// addEventOnElem(menuButton, "click", toggleMenu);
// addEventOnElem(cartButton, "click", toggleCart);
// addEventOnElem(wishlistButton, "click", toggleWishlist);
//   return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
// };
// /**
//  * Calculate total cart value
//  */
// const calculateTotalCartValue = function() {
//   return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
// };

// console.log("Total cart value:", calculateTotalCartValue());
