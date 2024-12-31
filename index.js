const axios = require('axios')
const { Keypair, Connection, clusterApiUrl, LAMPORTS_PER_SOL } = require('@solana/web3.js');

async function getPrice(){
	try{
		const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd')
		const price = response.data.dogecoin.usd
		console.log(`DogeCoin price is: ${price}`)
		return price;

	} catch(error) {
		console.log(error)
	}
}


getPrice()
