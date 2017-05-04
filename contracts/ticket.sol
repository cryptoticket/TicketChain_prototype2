contract TicketLedger {
	mapping (uint => address) tickets;

	function sellTicket(string num){
		tickets[num] = true;
		return
	}

	function isTicketSold(string num) returns (bool out){
		return tickets[num] == true;
	}

	/// This function is called when someone sends money to this contract directly.
	function() 
	{
		throw;
	}
}
