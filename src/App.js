import {React} from 'react';
import Header from './components/Header.js';
import Balance from './components/Balance.js';
import IncomeExpenses from './components/IncomeExpenses.js';
import TransactionList from './components/TransactionList.js';
import AddNewTransaction from './components/AddNewTransaction.js';
import {GlobalProvider} from './context/GlobalState.js';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddNewTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
