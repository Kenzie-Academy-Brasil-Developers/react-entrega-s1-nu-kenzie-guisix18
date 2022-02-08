import "./style.css";

const Card = ({transaction}) => {

    if (transaction.type === "Entrada") {
        return (
            <div className="cardTransaction entrie">
                <div className="descriType">
                    <h2>{transaction.description}</h2>
                    <p>{transaction.type}</p>
                </div>
                <p>R$ {transaction.value.toFixed(2)}</p>
            </div>    
        )
    } else {
        return (
            <div className="cardTransaction exit">
                <div className="descriType">
                    <h2>{transaction.description}</h2>
                    <p>{transaction.type}</p>
                </div>
                <p>- R$ {transaction.value.toFixed(2)}</p>
            </div>    
        )
    }

    
}

export default Card;