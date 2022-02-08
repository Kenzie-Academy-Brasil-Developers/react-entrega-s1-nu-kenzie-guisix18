import "./style.css";

const Card = ({transaction}) => {
    return (
        <div className="cardTransaction">
            <div className="descriType">
                <h2>{transaction.description}</h2>
                <p>{transaction.type}</p>
            </div>
            <p>{transaction.value}</p>
        </div>    
    )
}

export default Card;