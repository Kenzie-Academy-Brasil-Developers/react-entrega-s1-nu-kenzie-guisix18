const TotalMoney = ({listTransactions}) => {
    console.log(listTransactions)
    return (
        <div>
            {listTransactions.reduce((valorAnterior, valorInicial) => {
                return valorInicial.value + valorAnterior;
            }, 0).toFixed(2)}
        </div>
    )   
}

export default TotalMoney;