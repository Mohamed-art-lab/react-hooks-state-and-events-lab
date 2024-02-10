import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setInCart] = useState(false);

  const toggleCart = () => {
    setInCart(!isInCart);
  };

  const itemClass = isInCart ? "in-cart" : "";
  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCart}>{buttonText}</button>
    </li>
  );
}

export default Item;