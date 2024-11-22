import React from "react";
import Child2 from "./Child2";
import ErrorBoundary from "../ErrorBoundary";

export default function Parent2(  ) {
  return (
    <div className="container">
      <h1>Error Boundry</h1>
      <div className="row">
        <div className="col-4">
          <Child2 p1="https://levi.in/cdn/shop/files/548880023_01_Style_Shot_3d8c1000-52f5-4981-b79a-0e180e692253_360x.jpg?v=1711962059" />
        </div>
        <div className="col-4">
          <Child2 p1="https://levi.in/cdn/shop/files/A39570005_01_Style_Shot_0b3a03e8-6a4d-499c-9bc7-e49d6fb6c4d6_360x.jpg?v=1695738469" />
        </div>
        <div className="col-4">
          <ErrorBoundary>
            <Child2 p1="" />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}
