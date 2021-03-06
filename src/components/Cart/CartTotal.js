import React from "react";
import { Link } from "react-router-dom";
import PayPalButton from "./PayPalButton";

export default function CartTotal({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart, history } = value;

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-capitalize mb-3 px-5"
                onClick={() => {
                  clearCart();
                }}
              >
                clear cart
              </button>
              <h5>
                <span className="text-title">subtotal :</span>
                <strong>$ {cartSubTotal}</strong>
              </h5>
              <h5>
                <span className="text-title">tax :</span>
                <p>All price are including 13% VAT</p>
              </h5>
              
              <PayPalButton
                total={cartTotal}
                clearCart={clearCart}
                history={history}
              />
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
