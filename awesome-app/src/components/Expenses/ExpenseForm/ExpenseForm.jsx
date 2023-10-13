import { useState } from "react";
import { createPortal } from "react-dom";
import { v4 } from "uuid";

import classes from "./ExpenseForm.module.css";

const ExpenseForm = ({ addNewExpense }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredCreatedAt, setEnteredCreatedAt] = useState("");

  const titleChangeHandler = (event) => setEnteredTitle(event.target.value);
  const amountChangeHandler = (event) => setEnteredAmount(event.target.value);
  const craetedAtChangeHandler = (event) =>
    setEnteredCreatedAt(event.target.value);

  const addClickHandler = (event) => {
    event.preventDefault();
    let newExpense = {
      id: v4(),
      title: enteredTitle,
      amount: Number(enteredAmount),
      createdAt: new Date(enteredCreatedAt),
    };
    addNewExpense(newExpense);
  };
  return createPortal(
    <div className={classes["backdrop"]}>
      <div className={classes["dialog-box"]}>
        <div className="card">
          <div className="card-body">
            <form>
              <h1 className="text-center">New Expense Form</h1>
              {/* title */}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  id="title"
                  placeholder=""
                  value={enteredTitle}
                  onChange={titleChangeHandler}
                />
                <label htmlFor="title">Title:</label>
              </div>
              {/* amount */}
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  name="amount"
                  id="amount"
                  placeholder=""
                  value={enteredAmount}
                  onChange={amountChangeHandler}
                />
                <label htmlFor="amount">Amount:</label>
              </div>
              {/* createdAt */}
              <div className="form-floating mb-3">
                <input
                  type="date"
                  className="form-control"
                  name="created-at"
                  id="created-at"
                  placeholder=""
                  value={enteredCreatedAt}
                  onChange={craetedAtChangeHandler}
                  min="2022-04-01"
                  max="2024-03-31"
                />
                <label htmlFor="created-at">Created At:</label>
              </div>
              {/* buttons */}
              <div className="row">
                <div className="col-6">
                  <div className="d-grid">
                    <button
                      className="btn btn-success"
                      onClick={addClickHandler}
                    >
                      Add
                    </button>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-grid">
                    <button className="btn btn-warning">Reset</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("model-container")
  );
};

export default ExpenseForm;
