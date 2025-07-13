import { useState } from 'react';

function ProductList(props) {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const totalPrice = (props.price * count).toFixed(2);

  return (
    <div className="product-card">
      <h4>{props.title}</h4>
      <img src={props.imgURL} alt="Product Image" />
      <p>{props.description}</p>

      <div className="price-top">₱{props.price}</div>

      <div className="counter-inline">
        <button
          onClick={handleDecrement}
          disabled={count === 0}
          className={count === 0 ? 'decrement-button disabled' : 'decrement-button'}
        >
          –
        </button>

        <span className="count">{count}</span>

        <button onClick={handleIncrement}>+</button>
      </div>

      <div className="total-price">Total: ₱{totalPrice}</div>
    </div>
  );
}

export default ProductList;