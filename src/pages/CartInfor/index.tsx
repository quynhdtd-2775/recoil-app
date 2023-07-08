import React from "react";
import { useRecoilValue } from "recoil";
import { cartState, cartTotal } from "../../util/states/CartState";

const CartInfor = () => {
  const cart = useRecoilValue(cartState);
  const total = useRecoilValue(cartTotal);
  return (
    <div>
      <h2>Cart Infor</h2>

      {cart.map((item: any) => (
        <li key={item.id}>
          {item.product.title}: {item.quantity}
          Total:{item.product.price * item.quantity}
        </li>
      ))}

      <h2>Total: {total} VND </h2>
    </div>
  )
};

export default CartInfor;