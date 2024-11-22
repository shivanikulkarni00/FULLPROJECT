import React from "react";
import { useDispatch } from "react-redux";
import { dataTransfer } from "../redux/slices/categorySlice";

export default function Left(props) {
    let dispatch = useDispatch();
  function f1(value) {
    console.log(value);
      props.p1(value);
      dispatch(dataTransfer(value));
  }
  return (
    <div>
      <ul>
        <li
          onClick={() => {
            f1("electronics");
          }}
        >
          Electronics
        </li>
        <li
          onClick={() => {
            f1("jewelery");
          }}
        >
          Jewelery
        </li>
      </ul>
    </div>
  );
}
