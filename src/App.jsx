import Product from "./component/Product";
import Header from "./component/header";
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
