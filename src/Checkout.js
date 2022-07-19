import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import Header from "./Header";
let Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <>
      <Header />
      <div className='checkout'>
        <div className='checkout__left'>
          <h3>Hello {user?.email}</h3>
          <div className='checkout__title'>
            <h2>This is your Trolley:</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className='checkout__right'>
          <Subtotal />
        </div>
      </div>
    </>
  );
};

export default Checkout;
