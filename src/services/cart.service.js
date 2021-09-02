import { STORAGE_KEYS } from "../dealful";

export const cart = () => {
  const cartData = localStorage.getItem(STORAGE_KEYS.CART_DATA);
  try {
    return JSON.parse(cartData);
  } catch (error) {
    return { products: [] };
  }
};

export const setCart = (cart) => {
  localStorage.setItem(STORAGE_KEYS.CART_DATA, JSON.stringify(cart));
};

export const addToCart = (product) => {
  let cartData;
  try {
    cartData = cart() || { products: [] };
    if (!cartData?.products) {
      cartData.products = [];
    }
    cartData.products.push(product);
    setCart(cartData);
  } catch (err) {
    console.log(err);
  }
};
