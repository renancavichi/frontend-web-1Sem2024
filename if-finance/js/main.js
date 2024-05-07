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

function addCard({bolsa, codigo, empresa, valor, variacao, nAcoes}){
	//const {bolsa, codigo, empresa, valor, variacao, nAcoes} = stock

    const main = document.querySelector('body > main')
    
	main.innerHTML += `
        <div class="card-ticker">
			<header>
				<h2><span>${bolsa}:</span> ${codigo}</h2>
				<h1>${empresa}</h1>
			</header>
			<main>
				<p>${realFormat(+valor / 100)}</p>
				<span ${ variacao < 0 ? 'style="background: #FF0000;"' : ''} >${ variacao < 0 ? '▼' : '▲'} ${variacao}%</span>
				<span>${realFormat(((+valor / 100)*(variacao / 100)))}</span>
			</main>
			<footer>
				<div>
					<p>${nAcoes}</p>
					<span>Ações</span>
				</div>
				<div>
					<p>${realFormat(nAcoes * (+valor / 100))}</p>
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

const openModal = () => {
	const modal = document.getElementById('add-card-modal')
	modal.style.display = 'flex'
}

const closeModal = (event, id) => {
	const modal = document.getElementById('add-card-modal')
	if(event?.target?.id === 'add-card-modal' || id === 'add-card-modal' ){
		modal.style.display = 'none'
	}
}

const createCard = (event) =>{
	event.preventDefault()

	// const {bolsa, codigo, empresa, valor, variacao, nAcoes} = event.target.elements
	// const stock = {
	// 	bolsa: bolsa.value,
	// 	codigo: codigo.value,
	// 	empresa: empresa.value,
	// 	valor: valor.value,
	// 	variacao: variacao.value,
	// 	nAcoes: nAcoes.value
	// }

	const formData = new FormData(event.target)
	const stock = Object.fromEntries(formData)
	console.log(stock)

	addCard(stock)
	event.target.reset()
	closeModal(null, 'add-card-modal')
}