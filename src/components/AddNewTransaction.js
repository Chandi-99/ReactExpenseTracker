import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const AddNewTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const {addTransaction} = useContext(GlobalContext);
    const onSubmit =  e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
    }
    return ( 
        <>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label >Text</label>
                    <input type="text" name="text" value={text} onChange={(e)=>{setText(e.target.value)}} placeholder="Enter text..."/>
                </div>
                <div className="form-control">
                    <label >Amount</label>
                    <label>(negative - expense, positive - income)</label>
                    <input type="number" name="amount" value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder="Enter Amount..."/>
                </div>
                <button className="btn">Add Transaction</button>
            </form>

        </>
     );
}
 
export default AddNewTransaction;