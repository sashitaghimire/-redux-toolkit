import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import Modals from "./components/Modals";
import Navbar from "./components/Navbar";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";

function App() {
  const dispatch = useDispatch();

  const { cartItems, isLoading } = useSelector((state) => state?.cart);
  const { isOpen } = useSelector((store) => store?.modal);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems("random"));
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading....</h1>
      </div>
    );
  }
  return (
    <main>
      {isOpen && <Modals />}

      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
