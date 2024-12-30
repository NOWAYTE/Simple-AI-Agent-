import axios from 'axios';
import { keypair, connection, clusterAPIUrl, LAMPORT_PER_SOL } from '@solana/web3.js';

async function getPrice() {
	try {
		const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd')

		const price = response.data.dogecoin.usd
		console.log(`Dogecoin Price: ${price}`)
	}
}
