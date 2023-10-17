import React from "react";
import Hoc from "./Hoc";

const DummyTwo = (props) => {
  return (
    <div>
      <h1>The Dummy 2 Component</h1>
      <button className="btn btn-success" onClick={props.increaseCounter}>
        {props.counter}
      </button>
    </div>
  );
};

export default Hoc(DummyTwo);
