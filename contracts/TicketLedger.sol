pragma solidity ^0.4.4;

contract TicketLedger {

	address public  creator = 0x0;

	mapping (address => bool) tickets;

	function sellticket(address num) {
		tickets[num] = true;
	}

	function isticketsold(address num) constant returns (bool){
		// out = (tickets[num] == true);
		return tickets[num];

	}

	function TicketLedger(){
		creator = msg.sender;
	}

	/// This function is called when someone sends money to this contract directly.
	function (){
		throw;
	}
}
