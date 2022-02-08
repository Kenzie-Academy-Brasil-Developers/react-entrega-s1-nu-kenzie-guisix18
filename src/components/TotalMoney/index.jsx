import "./style.css";

const TotalMoney = ({listTransactions}) => {
    return (
        <div className="totalMoney">
            <span>Valor Total: </span>
            <span> $ {listTransactions.reduce((valorInicial, valorAnterior) => {
                if (valorAnterior.type === "Entrada") {
                    return valorInicial + valorAnterior.value;
                } else {
                    const value = valorAnterior.value;
                    return valorInicial - value;
                }
            }, 0).toFixed(2)}</span>
        </div>
    )   
}

export default TotalMoney;