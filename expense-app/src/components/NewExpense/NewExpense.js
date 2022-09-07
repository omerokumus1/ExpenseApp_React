import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    console.log("expenseData:", expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
