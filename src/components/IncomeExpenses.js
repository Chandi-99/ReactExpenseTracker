import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext);
    let total_1 = 0;
    let total_2 = 0;
    transactions.filter((transaction) =>transaction.amount > 0? total_1 += transaction.amount:'');
    transactions.filter((transaction) =>transaction.amount < 0? total_2 += transaction.amount:'');
    return ( 
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+${Math.abs(total_1)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${Math.abs(total_2)}</p>
            </div>

        </div>
     );
}
 
export default IncomeExpenses;