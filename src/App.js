import { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import "./App.css";

function App() {

  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 }
  ]);

  const createTransaction = (transaction) => {
    console.log(transaction);
  }

  return (
    <div>
      <h1>Nu Kenzie</h1>
      <Form createTransaction={createTransaction} listTransactions={listTransactions} setListTransactions={setListTransactions}/>
      <List listTransactions={listTransactions}></List>
    </div>
  );
}

export default App;
