exports.SoldQ = (NUM, cb)=> {
	var out = {
		sold: true
	};
	
	return cb(null, out)
};


exports.Sell = (NUM, cb)=> {
	var out = {
		tx: '0x3626f67b81cd57cd0ba62ad3d385e86f7d22a2757c0832f6b3830381afd3027d',
		txLink: 'https://kovan.etherscan.io/tx/0x3626f67b81cd57cd0ba62ad3d385e86f7d22a2757c0832f6b3830381afd3027d'
	};

	return cb(null, out)
}

