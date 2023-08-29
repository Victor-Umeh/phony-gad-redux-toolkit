import NavBar from "./components/navBar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import { calculateTotals } from "./features/cart/cartSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { isOpen } = useSelector((store) => store.modal);
  const { cartItems, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  // console.log(total);

  return (
    <main>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </main>
  );
}
export default App;
