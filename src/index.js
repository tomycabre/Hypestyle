// global imports
import "./toggleSidebar.js";
import "./cart/toggleCart.js";
import "./cart/setupCart.js";
// specific imports
import fetchProducts from "./fetchProducts.js";
import { setupStore, store } from "./store.js";
import display from "./displayProducts.js";
import { getElement } from "./utils.js";

const init = async () => {
  const products = await fetchProducts();
  if (products) {
    // add products to the store
    setupStore(products);
    const featured = store.filter((product) => product.featured === true);
    display(featured, getElement(".featured-center"));
  }
};

window.addEventListener("DOMContentLoaded", init);
