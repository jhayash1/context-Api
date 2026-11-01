import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateContext from "../contextApi/CreateContext";

function Cart() {
  const { cart } = useContext(CreateContext);
  const [add, setAdd] = useState({});
  const navigate = useNavigate()
  let total = 0;
  cart.forEach((data,i)=>{
      const quantity= add[i] || 1;
      total= total+ data.price * quantity

  })

  if(cart.length===0) return <></>

  return (
    <>
      <div className="cart">
        {cart.map((data, i) => (
          <div key={i} className="cart-card">
            <div className="img">
                <img src={data.url}/>
            </div>
            <div>
                <h4>{data.title}</h4>
                <div className="price">Price:{data.price}</div>

            </div>
            <div>

            <button  onClick={() =>
              setAdd((prev) => ({
                ...prev,
                [i]: Math.max(1, (prev[i] || 1) - 1),
              }))
            }>-</button>
            {add[i] || 1}
            <button  onClick={() =>
              setAdd((prev) => ({
                ...prev,
                [i]: (prev[i] || 1) + 1,
              }))
            }>+</button>
            </div>
          </div>
        ))}
        <p>Total: {total}</p>
        <button onClick={()=>navigate("/payment")}>Proceed to Payment</button>
      </div>
    </>
  );
}
export default Cart;
