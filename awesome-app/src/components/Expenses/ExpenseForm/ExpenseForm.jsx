import { useState } from "react";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("First");

  const titleChangeHandler = (event) => setEnteredTitle(event.target.value);

  const addClickHandler = (event) => {
    event.preventDefault();
    console.log("Title : ", enteredTitle);
  };
  return (
    <div className="backdrop">
      <div className="dialog-box">
        <div className="card">
          <div className="card-body">
            <form>
              <h1 className="text-center">New Expense</h1>
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
              {/* createdAt */}
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
    </div>
  );
};

export default ExpenseForm;
