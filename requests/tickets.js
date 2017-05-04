app.get('/api/v1/ticket/:NUM/sell', (req,res,next)=> {
	contracts.Sell(req.params.NUM, (err,answer)=> {
		if (err){
			res.json(err).sendStatus(401)
		}
		else res.json(answer).sendStatus(201);
	});
});

app.get('/api/v1/ticket/:NUM', (req,res,next)=> {
	contracts.SoldQ(req.params.NUM, (err,answer)=> {
		if (err){
			res.json(err).sendStatus(401)
		}
		else res.json(answer).sendStatus(201);
	});
});



