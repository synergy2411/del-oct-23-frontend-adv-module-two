import React, { Fragment } from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

function Expenses() {
  let expenses = [
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

  return (
    <Fragment>
      <div className="row">
        <ExpenseItem expense={expenses[0]} />

        {/* <ExpenseItem expense={expenses[0]}>
          <p>The parent supplied paragraph</p>
        </ExpenseItem> */}
        <ExpenseItem expense={expenses[1]} />
        <ExpenseItem expense={expenses[2]} />
      </div>
    </Fragment>
  );
}

export default Expenses;
