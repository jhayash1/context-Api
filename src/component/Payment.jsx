import React, { useContext } from "react";
import CreateContext from "../contextApi/CreateContext";
import Cart from "./Cart";

export const Payment = () => {
  const cart = useContext(CreateContext);
  return (
    <div className="main">
      <div className="col">
        <label className="flex items-center justify-between border p-4 rounded-lg mb-4 cursor-pointer hover:border-blue-500">
          <div>
            <h3 className="font-semibold">Cash on Delivery</h3>
            <p className="text-gray-500 text-sm">Pay when your order arrives</p>
          </div>

          <input type="radio" />
        </label>
        <label className="flex items-center justify-between border p-4 rounded-lg mb-6 cursor-pointer hover:border-blue-500">
          <div>
            <h3 className="font-semibold">Credit / Debit Card</h3>
            <p className="text-gray-500 text-sm">
              Pay securely using your card
            </p>
          </div>

          <input type="radio" />
        </label>

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
          Continue
        </button>
      </div>
      <div className="col">
        <Cart cart={cart} />
      </div>
    </div>
  );
};
