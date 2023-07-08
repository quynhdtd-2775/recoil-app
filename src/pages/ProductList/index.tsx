import React from "react";
import { useRecoilState } from "recoil";
import { productListState } from "../../util/states/ProductState.js";
import { addToCard, cartState } from "../../util/states/CartState.js";

const Login = () => {
  const productList = useRecoilState(productListState);
  const productListNew = productList[0];

  const [cart, setCart] = useRecoilState(cartState);
  const handleAddToCart = (product: any) => {
    const newCart = addToCard(cart, product) as never;
    setCart(newCart);
    console.log('newCart',newCart)
  };

  return (
    <div>
      <h1>Product List</h1>
      <ul className="product-list">
        {productListNew && productListNew.map(product => (
          <li key={product.id} >
            {product.title || ''}
            <button onClick={() => handleAddToCart(product)}>
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Login;