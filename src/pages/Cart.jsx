import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import "./Cart.css";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div className="cart-container">


      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="cart-checkout">

        <div>
          <div className="your-cart">Your Cart</div>
          <div className="summary">Summary</div>
          <p>
            <span className="total-items">Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p className="total-amount">Total Amount: ${totalAmount}</p>
          <button className="checkout-btn">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="noitem-data">
      <h1 className="empty-cart">Cart Empty</h1>
      <Link to={"/"}>
        <button className="shop-now">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
