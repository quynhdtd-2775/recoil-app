import { atom, selector } from "recoil";

export const cartState = atom({
  key: 'cart',
  default: [],
});

export const cartTotal = selector({
  key: 'cartTotal',
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((total, item) => {
      return total + item.product.price * item.quantity
    }, 0)
  }
});

export const addToCard = (cart, product) => {
  const newCart =  [...cart];
  const foundIndex = cart.findIndex((item) => item.id === product.id );

  if (foundIndex >= 0) {
    newCart[foundIndex] = {
      ...cart[foundIndex],
      quantity: cart[foundIndex].quantity + 1
    };
    return newCart;
  }

  newCart.push({
    id: product.id,
    product: product,
    quantity: 1,
  });
  return newCart;
};
