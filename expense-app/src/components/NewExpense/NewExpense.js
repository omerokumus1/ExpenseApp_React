import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const saveExpenseDataHandler = (enteredExpense) => {
    changeFormVisibilityHandler();
    addExpenseData(enteredExpense);
  };

  const changeFormVisibilityHandler = (event) => {
    setIsFormVisible((prevValue) => !prevValue);
  };

  const addExpenseData = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    console.log("expenseData:", expenseData);
    props.onAddExpense(expenseData);
  };

  if (!isFormVisible) {
    return (
      <div className="new-expense">
        <button onClick={changeFormVisibilityHandler}>Add New Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onClickCloseForm={changeFormVisibilityHandler}
      />
    </div>
  );
}

export default NewExpense;
