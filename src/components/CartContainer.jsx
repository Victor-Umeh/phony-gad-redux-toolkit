import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((store) => store.cart);

  if (amount === 1)
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
    </section>
  );
};

export default CartContainer;
