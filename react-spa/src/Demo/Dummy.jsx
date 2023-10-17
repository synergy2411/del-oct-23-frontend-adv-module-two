import React from "react";
import Hoc from "./Hoc";

const Dummy = (props) => {
  return (
    <div>
      <h1>The Dummy Componnet</h1>
      <button className="btn btn-primary" onClick={props.increaseCounter}>
        {props.counter}
      </button>
    </div>
  );
};

export default Hoc(Dummy);
