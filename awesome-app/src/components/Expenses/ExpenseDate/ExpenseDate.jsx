const ExpenseDate = ({ createdAt }) => {
  const year = createdAt.getFullYear();
  const day = createdAt.toLocaleString("en-US", { day: "numeric" });
  const month = createdAt.toLocaleString("en-US", { month: "long" });
  //   console.log(createdAt.getMonth());
  return (
    <p>
      Date : {month} {day}, {year}
    </p>
  );
};

export default ExpenseDate;
