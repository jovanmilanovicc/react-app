import React from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";


function Expenseitem(props) {
  

  

  return (
    <li>
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item_price">${props.amount}</div>
      
    </div>
    </li>
  );
}

export default Expenseitem;
