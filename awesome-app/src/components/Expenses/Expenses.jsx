import React, { Fragment, useState } from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import ExpenseForm from "./ExpenseForm/ExpenseForm";

const INITIAL_EXPENSES = [
  {
    id: "e001",
    title: "shopping",
    amount: 19.9,
    createdAt: new Date("Dec 21, 2022"),
  },
  {
    id: "e002",
    title: "planting",
    amount: 28.9,
    createdAt: new Date("Mar 20, 2023"),
  },
  {
    id: "e003",
    title: "grocery",
    amount: 99.9,
    createdAt: new Date("Aug 8, 2023"),
  },
];

function Expenses() {
  let [toggle, setToggle] = useState(false); // without re-initializing the state variables

  let [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const toggleClickHandler = () => setToggle(!toggle);

  const addNewExpense = (newExp) => {
    setExpenses((prevExpense) => [newExp, ...prevExpense]);
    setToggle(false);
  };

  return (
    <Fragment>
      <div className="row">
        <div className="col-4 offset-4">
          <div className="d-grid">
            <button className="btn btn-secondary" onClick={toggleClickHandler}>
              {toggle ? "Hide" : "Show"}
            </button>
          </div>
        </div>
      </div>

      {toggle && <ExpenseForm addNewExpense={addNewExpense} />}

      <div className="row">
        {expenses.map((exp) => (
          <ExpenseItem expense={exp} key={exp.id} />
        ))}
      </div>
    </Fragment>
  );
}

export default Expenses;
