import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function ExpenseItems(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((expense, index) => (
        <ExpenseItem key={index} expense={expense} />
      ))}
    </Card>
  );
}

export default ExpenseItems;
