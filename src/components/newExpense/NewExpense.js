import React from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import { useState } from 'react';



const NewExpense = (props) => {
    const [isEditing, setIsEditing] =  useState(false);
    const saveDataExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditing = () => {
        setIsEditing(true);
    }

    const stopEditing = () =>{
        setIsEditing(false)
    }

    return(
    <div className="new-expense">
        {!isEditing && <button onClick={startEditing}>Add new expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveDataExpenseHandler} onCancel={stopEditing}/>}
      
    </div>
    )
}

export default NewExpense;