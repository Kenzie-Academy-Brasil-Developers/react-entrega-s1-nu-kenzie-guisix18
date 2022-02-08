import { useState } from "react";
import "./style.css"
const Form = ({moldTransaction}) => {

    const [description, setDescription] = useState("");
    const [value, setValue] = useState(0);
    const [type, setType] = useState("");

    const obj = {description: description, type: type, value: value};

    const prevent = (event) => {
        event.preventDefault();
    }

    const validateType = (type) => {
        const getType = type.target.value;
        setType(getType);
    }


    return (
        <form onSubmit={prevent}>
            <div className="form">
                <div className="inputDescription">
                    <h3>Descrição</h3>
                    <input onChange={(event) => setDescription(event.target.value)} type="text" placeholder="Digite aqui sua descrição"></input>
                    <p>Ex: Compra de roupas</p>
                </div>    
                <div className="inputValue">
                    <input onChange={(event) => setValue(Number(event.target.value))} type="number" placeholder="Valor R$"></input>
                    <select className="inputsTypes" onClick={validateType}>
                    <option value="entrada">Entrada</option>
                    <option value="saída">Saída</option>
                    </select>
                </div>
            <button className="buttonForm" onClick={() => moldTransaction(obj)}>Inserir</button>
            </div>
        </form>
    )
}

export default Form;