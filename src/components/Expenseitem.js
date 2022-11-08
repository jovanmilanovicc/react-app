import React, {useState} from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";


function Expenseitem(props) {
  const [title, setTitle]= useState(props.title);

  const clickHandler= () => {
    setTitle('Updated');
    
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item_price">{props.amount}</div>
      <button onClick={clickHandler}>Change Ttitle</button>
    </div>
  );
}

export default Expenseitem;
