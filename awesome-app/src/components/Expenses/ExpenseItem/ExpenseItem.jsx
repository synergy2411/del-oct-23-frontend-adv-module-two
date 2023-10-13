import ExpenseDate from "../ExpenseDate/ExpenseDate";

const ExpenseItem = ({ expense, children }) => {
  return (
    <div className="col-4">
      <div className="card">
        <div className="card-body">
          <h5 className="text-center">{expense.title.toUpperCase()}</h5>
          <p>Amount : ${expense.amount}</p>
          <p>Date : {expense.createdAt.toString()}</p>
          <ExpenseDate createdAt={expense.createdAt} />
          {/* {children} */}
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
