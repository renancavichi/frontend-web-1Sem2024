console.log("Arquivo js externo!") // loga uma mensagem no console

const allStocks = [
	{ 
		bolsa: "NASDAQ",
		codigo: "AAPL",
		empresa: "Apple Inc",
		valor: 25080,
		variacao: 0.35,
		nAcoes: 40
	},
	{
		bolsa: "NASDAQ",
		codigo: "MSFT",
		empresa: "Microsoft Corp",
		valor: 50234,
		variacao: -1.5,
		nAcoes: 20
	},
	{
		bolsa: "NASDAQ",
		codigo: "META",
		empresa: "Meta Platforms Inc",
		valor: 43262,
		variacao: 2.3,
		nAcoes: 5
	}
]


function addCard(stock){
    const main = document.querySelector('body > main')
    main.innerHTML = main.innerHTML + `
        <div class="card-ticker">
			<header>
				<h2><span>${stock.bolsa}:</span> ${stock.codigo}</h2>
				<h1>${stock.empresa}</h1>
			</header>
			<main>
				<p>R$ ${realFormat(+stock.valor / 100)}</p>
				<span ${ stock.variacao < 0 ? 'style="background: #FF0000;"' : ''} >${ stock.variacao < 0 ? '▼' : '▲'} ${allStocks[1].variacao}%</span>
				<span>R$ ${realFormat(((+stock.valor / 100)*(stock.variacao / 100)))}</span>
			</main>
			<footer>
				<div>
					<p>${stock.nAcoes}</p>
					<span>Ações</span>
				</div>
				<div>
					<p>R$ ${realFormat(stock.nAcoes * (+stock.valor / 100))}</p>
					<span>Posição</span>
				</div>
			</footer>
		</div>
    `
}

function realFormat(valor){
	return valor.toFixed(2).toString().replace('.',',')
}

function loadCards(){
	allStocks.map(stock => addCard(stock))
}

