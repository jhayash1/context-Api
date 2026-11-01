import { Payment } from "./component/Payment";
import Product from "./component/Product";
import Header from "./component/header";
import {CartProvider} from "./contextApi/CreateContext"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/payment" element={<Payment />} />
        <Route path="/" element={<Product />} />
      </Routes>
    </CartProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
