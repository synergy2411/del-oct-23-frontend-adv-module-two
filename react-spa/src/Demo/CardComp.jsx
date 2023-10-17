import React from "react";
import CardTitle from "./CardTitle";
import CardBody from "./CardBody";

const CardComp = (props) => {
  return (
    <>
      <h1> Card Component</h1>
      <div className="row">
        <div className="col-4 offset-4">
          <div className="card">
            <div className="card-header">
              {/* <CardTitle title={props.title} /> */}
              {props.titleComp}
            </div>
            <div className="card-body">
              {/* <CardBody msg={props.msg} /> */}

              {props.msgComp}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComp;
