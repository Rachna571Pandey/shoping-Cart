
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
import "./CartItem.css";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div className="cart-container">

        <div className="cart-image"> 
          <img src={item.image} />
        </div>
        <div className="cart-title">
          <h1 className="cart-title1">{item.title}</h1>
          <h1 className="cart-description">{item.description}</h1>
          <div className="item-data">
            <p className="item-price">${item.price}</p>
            <div className="item-delete"
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
