const ExpenseForm = () => {
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
                />
                <label htmlFor="title">Title:</label>
              </div>
              {/* amount */}
              {/* createdAt */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseForm;
