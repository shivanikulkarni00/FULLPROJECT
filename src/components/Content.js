import React from "react";
import Product from "./Product";
function Content() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-3">
          <Product name="Adidas" price="4000" />
        </div>
        <div className="col-xl-3">
          <Product name="Nike" price="2500" />
        </div>
        <div className="col-xl-3">
          <Product name="Nobiro" price="1000" />
        </div>
        <div className="col-xl-3">
          <Product name="Sparks" price="2000" />
        </div>
      </div>
    </div>
  );
}
export default Content;
