import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  /* const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  }) */

  const titleChangeHandler = (event) => {
    /*setUserInput({
        ...userInput,
        enteredTitle: event.target.value
    })*/
    /* setUserInput= (prevState) => {
        return{
            ...prevState,
            enteredTitle: event.target.value
        }
    } */
    setEnteredTitle(event.target.value);
  };
  
  const amountChangedHandler = (event) => {
    /* setUserInput({
        ...userInput,
        enteredAmount: event.target.value
    }) */
    setEnteredAmount(event.target.value);
  }
  const dateChangedHandler = (event) => {
    /* setUserInput({
        ...userInput,
        enteredDate: event.target.value
    }) */
    setEnteredDate(event.target.value);
}
   const submitHandler = (event) => {
    event.preventDefault();
    
    const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate)
        //sdajsdhasdkhasdkh
    }
    props.onSaveExpenseData(expenseData);
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');

   }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangedHandler}/>
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangedHandler}/>
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
