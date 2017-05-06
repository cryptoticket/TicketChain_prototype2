
app.get('/api/v1/ticket/:address/sell', (req,res,next)=> {
	contracts.call_API_method(SellTicket)(req.params.address, (err,ans)=>{
		if (err){ res.sendStatus(401) }
		else  res.sendStatus(201);
	})
});

app.get('/api/v1/ticket/:address', (req,res,next)=> {
	contracts.call_API_method(IsTicketSold)(req.params.address, (err,ans)=>{
		if (err){ res.sendStatus(401) }
		else   res.json(ans);
	})
});

//0x0605bf0970025A6DD604f5fE481Cc307E9d5450e в прогрессе, должен в true, но пока false
//0xb9af8aa42c97f5a1f73c6e1a683c4bf6353b83e8 этот уже true