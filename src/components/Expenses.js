import React, {useState} from "react";
import './Expenses.css';
import ExpenseFilter from "./newExpense/ExpenseFilter";
import ExpenseList from './ExpenseList';
import ExpenseChart from './newExpense/ExpenseChart';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpense = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  return (
    <div>
      <div className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpenseChart  expenses={filteredExpense}   />
      <ExpenseList items={filteredExpense}/>
    </div>
    </div>
  );
}
export default Expenses;
