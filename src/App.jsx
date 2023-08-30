import NavBar from "./components/navBar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { isOpen } = useSelector((store) => store.modal);
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading)
    return (
      <div className="loading">
        <h1>Loading</h1>
      </div>
    );

  return (
    <main>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </main>
  );
}
export default App;
