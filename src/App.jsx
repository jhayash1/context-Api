import Product from "./component/Product";
import Header from "./component/Header";
import {CartProvider} from "./contextApi/CreateContext"

function App() {
  return (
    <>
    <CartProvider>
      <Header />
      <Product />
    </CartProvider>
    </>
  );
}

export default App;
