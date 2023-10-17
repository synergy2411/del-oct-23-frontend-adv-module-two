import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNew = () => {
  const [enteredLabel, setEnteredLabel] = useState("");

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    let newTodo = {
      label: enteredLabel,
      status: "pending",
    };
    fetch("http://localhost:3030/todos", {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("RESULT : ", result);
        navigate("/todos");
      })
      .catch(console.error);
  };

  return (
    <div className="row m-6">
      <div className="col-6 offset-3">
        <form onSubmit={submitHandler}>
          <div className="row">
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                placeholder="add new todo item here..."
                value={enteredLabel}
                onChange={(e) => setEnteredLabel(e.target.value)}
              />
            </div>
            <div className="col-4">
              <div className="d-grid">
                <button className="btn btn-dark" type="submit">
                  Add
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <form></form>
    </div>
  );
};

export default AddNew;
