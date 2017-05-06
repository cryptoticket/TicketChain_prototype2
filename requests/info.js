app.get('/api/v1/info', (req,res,next)=>{
	var out = {
		"eth_is_enabled": !!process.env.SMART_CONTRACTS_ENABLED,
		"eth_node":process.env.ETH_NODE,
		"eth_main_address": process.env.CONTRACT_ADDRESS,
		"eth_main_address_link": `https://kovan.etherscan.io/address/${process.env.CONTRACT_ADDRESS}`,
		"eth_main_account": process.env.ETH_CREATOR_ADDRESS,
		"eth_main_account_link": `https://kovan.etherscan.io/address/${process.env.ETH_CREATOR_ADDRESS}`,
		"eth_balance_wei": "123112"
	}

	res.json(out).sendStatus(201);
});