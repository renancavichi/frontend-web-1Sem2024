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
	},
	{
		bolsa: "NASDAQ",
		codigo: "GOOGL",
		empresa: "Alphabet Class A",
		valor: 16615,
		variacao: -0.78,
		nAcoes: 8
	},
	{
		bolsa: "NASDAQ",
		codigo: "NVDA",
		empresa: "NVIDIA Corp",
		valor: 87757,
		variacao: 0.02,
		nAcoes: 13
	}
]

function addCard(stock){
    const main = document.querySelector('body > main')
    
	main.innerHTML += `
        <div class="card-ticker">
			<header>
				<h2><span>${stock.bolsa}:</span> ${stock.codigo}</h2>
				<h1>${stock.empresa}</h1>
			</header>
			<main>
				<p>${realFormat(+stock.valor / 100)}</p>
				<span ${ stock.variacao < 0 ? 'style="background: #FF0000;"' : ''} >${ stock.variacao < 0 ? '▼' : '▲'} ${stock.variacao}%</span>
				<span>${realFormat(((+stock.valor / 100)*(stock.variacao / 100)))}</span>
			</main>
			<footer>
				<div>
					<p>${stock.nAcoes}</p>
					<span>Ações</span>
				</div>
				<div>
					<p>${realFormat(stock.nAcoes * (+stock.valor / 100))}</p>
					<span>Posição</span>
				</div>
			</footer>
		</div>
    `
}

function realFormat(valor){
	//return 'R$ ' + valor.toFixed(2).toString().replace('.',',')
	return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valor)
}

function loadCards(){
	allStocks.map(stock => addCard(stock))
}

function loadTable(){
	const table = document.querySelector('#table-acoes')
	let rows = table.innerHTML
	allStocks.map(stock => {
		rows += 
			`<tr>
				<td>${stock.bolsa}</td>
				<td>${stock.codigo}</td>
				<td>${stock.empresa}</td>
				<td>${realFormat(stock.valor / 100)}</td>
				<td>${stock.variacao} %</td>
				<td>${stock.nAcoes}</td>
				<td>${realFormat((stock.valor / 100) * stock.nAcoes)}</td>
			</tr>`
	})
	table.innerHTML = rows
}

