import NavBar from "./components/navBar";
import CartContainer from "./components/CartContainer";
import { calculateTotals } from "./features/cart/cartSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { cartItems, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  console.log(total);
  return (
    <main>
      <NavBar />
      <CartContainer />
    </main>
  );
}
export default App;
