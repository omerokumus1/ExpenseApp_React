import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (yearSelected) => {
    setFilteredYear(yearSelected);
  };

  return (
    <div>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <Card className="expenses">
        {props.expenses
          .filter(
            (expense) => expense.date.getFullYear().toString() === filteredYear
          )
          .map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} />
          ))}
      </Card>
    </div>
  );
}

export default Expenses;
