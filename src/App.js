import { useState } from 'react';
import "./App.css";
import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';
import TotalMoney from './components/TotalMoney';

function App() {

  const [listTransactions, setListTransactions] = useState([]);

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
          <div className="filters">
            <h2>Resumo financeiro</h2>
            <div className="allButtons">
              <button className="Todos">Todos</button>
              <button className="Entradas">Entradas</button>
              <button className="Saídas">Saídas</button>
            </div>
          </div>
          <List listTransactions={listTransactions}/>
        </div>
      </div>
    </main>
  );
}

export default App;
