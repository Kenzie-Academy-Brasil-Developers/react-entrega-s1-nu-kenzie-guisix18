import Card from "../Card"

const List = ({listTransactions}) => {
    console.log(listTransactions)
    return (
        listTransactions.map((transaction, index) => <Card transaction={transaction} key={index} />)
    )
}

export default List;