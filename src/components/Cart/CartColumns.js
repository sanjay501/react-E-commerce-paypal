import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-md-2 col-lg-2 ">
          <p className="text-uppercase">Products</p>
        </div>
        <div className="col-10 mx-auto col-md-2 col-lg-2 ">
          <p className="text-uppercase">name of Product </p>
        </div>
        <div className="col-10 mx-auto col-md-1 col-lg-1 ">
          <p className="text-uppercase">Price/cf</p>
        </div>
        <div className="col-10 mx-auto col-md-1 col-lg-1 ">
          <p className="text-uppercase">Volume(cf)</p>
        </div>
        <div className="col-10 mx-auto col-md-2 col-lg-2 ">
          <p className="text-uppercase">Price per piece</p>
        </div>
        
        <div className="col-10 mx-auto col-md-2 col-lg-2 ">
          <p className="text-uppercase">Quantity</p>
        </div>
        
        <div className="col-10 mx-auto col-md-1 col-lg-1 ">
          <p className="text-uppercase">Total</p>
        </div>
        <div className="col-10 mx-auto col-md-1 col-lg-1 ">
          <p className="text-uppercase">Remove</p>
        </div>
      </div>
    </div>
  );
}
