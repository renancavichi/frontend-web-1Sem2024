const stock = { 
    bolsa: "NASDAQ",
    codigo: "AAPL",
    empresa: "Apple Inc",
    valor: 25080,
    variacao: 0.35,
    nAcoes: 40
}

// const bolsa = stock.bolsa
// const codigo = stock.codigo
// const empresa = stock.empresa

const {bolsa, codigo: ticker, empresa} = stock

stock.bolsa = "NYSE"

console.log(bolsa, ticker, empresa)