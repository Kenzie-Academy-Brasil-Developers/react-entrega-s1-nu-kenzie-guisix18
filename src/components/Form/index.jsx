import { useState } from "react"
import "./style.css"

const Form = ({listTransactions, setListTransactions}) => {


    // const [transaction, setTransaction] = useState({description: "", type: "", valor: 0})

    const prevent = (event) => {
        event.preventDefault();
    }

    const createNewTransactionDescription = (newDescription) => {
        setListTransactions([...listTransactions, {description: newDescription}]);
        console.log(listTransactions)
    }

    const createNewTransactionValue = (newValue) => {
        setListTransactions([...listTransactions, {value: newValue}])
    }

    return (
        <form onSubmit={prevent}>
            <input onChange={(event) => createNewTransactionDescription(event.target.value)} type="text" placeholder="Digite aqui sua descrição"></input>
            <input onChange={(event) => createNewTransactionValue(Number(event.target.value))} type="number" placeholder="R$"></input>
            <select>
                <option value="Entrada">Entrada</option>
                <option value="Saida">Saída</option>
            </select>
            <button onClick={() => setListTransactions(listTransactions)}>Inserir Valor</button>
        </form>
    )
}

export default Form;