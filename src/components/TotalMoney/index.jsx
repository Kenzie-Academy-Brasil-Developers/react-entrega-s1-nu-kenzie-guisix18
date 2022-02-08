const TotalMoney = ({listTransactions}) => {
    return (
        <div>
            {listTransactions.reduce((valorInicial, valorAnterior) => {
                if (valorAnterior.type === "Entrada") {
                    return valorInicial + valorAnterior.value;
                } else {
                    const value = valorAnterior.value;
                    return valorInicial - value;
                }
            }, 0).toFixed(2)}
        </div>
    )   
}

export default TotalMoney;