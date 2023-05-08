import React, { useState } from "react";
import trashcan from "../../images/trash.svg";
import "./CartItem.scss";
const CartItem = ({ image, price }) => {
  let [itemCounter, setItemCounter] = useState(1);
  let [totalPrice, setTotalPrice] = useState(price);

  const plusPrice = () => {
    setItemCounter(++itemCounter);
    const newPrice = totalPrice + price;
    setTotalPrice(newPrice);
  };

  const minusPrice = () => {
    setItemCounter(--itemCounter);
    const newPrice = totalPrice - price;
    setTotalPrice(newPrice);
  };

  return (
    <div className="cartWrapper">
      <div className="cartInfo">
        <img className="imageWrapper" src={image} alt="" />
        <div className="buttonsWrapper">
          <div className="trashWrapper">
            <img className="trash" src={trashcan} alt="" />
          </div>

          <div className="changeTotalWrapper">
            <div className="changeTotal" onClick={() => minusPrice()}>
              -
            </div>
            <div className="itemCounter">{itemCounter}</div>
            <div className="changeTotal" onClick={() => plusPrice()}>
              +
            </div>
          </div>
        </div>
      </div>

      <div className="priceWrapper">
        <div className="priceTitle">Price:</div>
        <div className="price">${totalPrice}</div>
      </div>
    </div>
  );
};

export default CartItem;
