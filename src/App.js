import { useState } from 'react';
import "./App.css";
import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';
import TotalMoney from './components/TotalMoney';

function App() {

  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 }
  ]);

  const moldTransaction = (transaction) => {
    return setListTransactions([...listTransactions, transaction]);
  }

  return (
    <main>
      <Header/>
      <div className="mainDiv">
        <div className="Form">
          <Form moldTransaction={moldTransaction}/>
          <TotalMoney listTransactions={listTransactions}/>
        </div>
        <div className="List">
          <List listTransactions={listTransactions}/>
        </div>
      </div>
    </main>
  );
}

export default App;
