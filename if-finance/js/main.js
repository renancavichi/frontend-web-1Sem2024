console.log("Arquivo js externo!") // loga uma mensagem no console

function addCard(){
    const main = document.querySelector('body > main')
    main.innerHTML = main.innerHTML + `
        <div class="card-ticker">
			<header>
				<h2><span>NASDAQ:</span> AAPL</h2>
				<h1>MSF</h1>
			</header>
			<main>
				<p>R$ 250,80</p>
				<span>▲ 0,35%</span>
				<span>R$ 0,60</span>
			</main>
			<footer>
				<div>
					<p>40</p>
					<span>Ações</span>
				</div>
				<div>
					<p>R$ 34853,45</p>
					<span>Posição</span>
				</div>
			</footer>
		</div>
    `
}