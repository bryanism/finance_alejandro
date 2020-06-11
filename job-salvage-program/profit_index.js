function startOver() {

	document.profit_index_form.pv_investment_amt.value="";
	document.profit_index_form.cost_investment_amt.value="";
	
	document.getElementById("resultprofitability").innerHTML="";
	

	location.reload();
	

}



function validate () {


	var pv_investment_amt = document.profit_index_form.pv_investment_amt.value;  
	var cost_investment_amt = document.profit_index_form.cost_investment_amt.value;
	

										// isNaN(number()) checks to see if the user entered a float
	if (pv_investment_amt < 0 || isNaN(pv_investment_amt) ) {
	
		alert("Please enter a valid number for Present Value of Cash Flows from Investment amount.");
		document.profit_index_form.pv_investment_amt.value= "";
		
	}
	

	else if (cost_investment_amt < 0 || isNaN(cost_investment_amt) ) {
		alert("Please enter a valid number for Cost of Investment Amount.");
		document.profit_index_form.cost_investment_amt.value="";
		
	}
	
	
	
	else {
        
        calculate (parseFloat(pv_investment_amt), parseFloat(cost_investment_amt) );
	}
        
    }


function calculate  ( pv_investment_amt, cost_investment_amt) {

	var a = pv_investment_amt;
    var b = cost_investment_amt;
   
    
    var result = a/b ;

	
	document.getElementById("resultprofitability").innerHTML = result ; 
    
}
