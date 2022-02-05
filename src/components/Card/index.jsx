const Card = ({transaction}) => {
    return (
        <div className="cardTransaction">
            <h2>{transaction.description}</h2>
            <p>{transaction.type}</p>
            <p>{transaction.value}</p>
        </div>
    )
}

export default Card;