const Card = ({transaction}) => {
    return (
        <div>
            <h2>{transaction.description}</h2>
            <p>{transaction.type}</p>
            <p>{transaction.value}</p>
        </div>
    )
}

export default Card;