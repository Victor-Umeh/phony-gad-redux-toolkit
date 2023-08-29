import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../features/cart/cartSlice";

const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  if (amount < 1)
    return (
      <section className="cart">
        <header>
          <h2>your cart</h2>
          <h4 className="empty-cart">cart is empty</h4>
        </header>
      </section>
    );

  return (
    <section className="cart">
      <header>
        <h2>your cart</h2>
      </header>

      <section>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </section>
      <footer>
        <hr />

        <section className="cart-total">
          <h4>
            total <span>$ {total}</span>
          </h4>
        </section>
        <button className="btn clear-btn" onClick={() => dispatch(clearCart())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
