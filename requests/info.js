app.get('/api/v1/info', (req,res,next)=>{
	var out = {
		"eth_is_enabled": true,
		"eth_node": "http://ethnode.chain.cloud:8545",
		"eth_main_address": "0x0605bf0970025A6DD604f5fE481Cc307E9d5450e",
		"eth_main_address_link": "https://kovan.etherscan.io/address/0x0605bf0970025A6DD604f5fE481Cc307E9d5450e",
		"eth_main_account": "0xb9af8aa42c97f5a1f73c6e1a683c4bf6353b83e7",
		"eth_main_account_link": "https://kovan.etherscan.io/address/0xb9af8aa42c97f5a1f73c6e1a683c4bf6353b83e7",
		"eth_balance_wei": "123112"
	}

	res.json(out).sendStatus(201);
});