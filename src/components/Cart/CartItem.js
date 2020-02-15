import React from "react";
import { ButtonContainer } from "../Button";
import PayPalButton from "./PayPalButton";

export default function CartItem({ product, value }) {
  const { id, title, img, price,volume, total, count } = product;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-4 text-center text-capitalixe">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="image product"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2 text-center ">
        <span className="d-lg-none">product :</span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-1 text-center ">
        <span className="d-lg-none">price/cf:</span>NRs {price}
      </div>
      <div className="col-10 mx-auto col-lg-1 text-center ">
        <span className="d-lg-none">volume(cf):</span>{volume} cf
      </div>
      <div className="col-10 mx-auto col-lg-2 text-center ">
        <span className="d-lg-none">price per piece:</span>{volume*price} cf
      </div>

      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
        <div className="d-flex justify-content-center">
          <div>
            <span
              className="btn btn-black mx-1"
              onClick={() => {
                decrement(id);
              }}
            >
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>

            <span
              className="btn btn-black mx-1"
              onClick={() => {
                increment(id);
              }}
            >
              +
            </span>
          </div>
        </div>
      </div>
      
      <div className="col-10 mx-auto col-lg-1 text-center ">
        <span className="d-lg-none">
          <strong>item total : </strong>
        </span>
        <strong>${total}</strong>
      </div>
      <div className="col-10 mx-auto col-lg-1  text-center ">
        <div className="cart-icon">
          <i
            onClick={() => {
              removeItem(id);
            }}
            className="fas fa-trash"
          />
        </div>
      </div>
    </div>
  );
}
