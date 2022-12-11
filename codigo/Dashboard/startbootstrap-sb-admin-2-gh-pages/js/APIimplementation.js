let dollarName = document.getElementById('DollarName')
let dollarCode = document.getElementById('DollarCode')
let dollarBid = document.getElementById('DollarBid')
let EuroName = document.getElementById('EuroName')
let EuroCode = document.getElementById('EuroCode')
let EuroBid = document.getElementById('EuroBid')
let BTCName = document.getElementById('BTCName')
let BTCCode = document.getElementById('BTCCode')
let BTCBid = document.getElementById('BTCBid')
fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
		.then((res) => res.json())
			.then(data => {
				dollarBid.innerText = "R$" + data.USDBRL.bid;
				EuroBid.innerText = "R$" + data.EURBRL.bid;
				BTCBid.innerText = "R$" + data.BTCBRL.bid;
				
				
				
				

		})