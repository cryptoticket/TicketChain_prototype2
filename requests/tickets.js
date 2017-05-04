app.get('/api/v1/ticket/:NUM/sell', (req,res,next)=>{
	var out = {
		sold: true
	}
	res.json(out).sendStatus(201);
});


app.get('/api/v1/ticket/:NUM', (req,res,next)=>{
	var out = {
		tx: '0x3626f67b81cd57cd0ba62ad3d385e86f7d22a2757c0832f6b3830381afd3027d',
		txLink: 'https://kovan.etherscan.io/tx/0x3626f67b81cd57cd0ba62ad3d385e86f7d22a2757c0832f6b3830381afd3027d'
	}
	res.json(out).sendStatus(201);
});


