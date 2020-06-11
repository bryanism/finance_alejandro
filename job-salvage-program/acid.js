function startOver() {

	document.cash_assets_lie_form.total_cash_amt.value="";
	document.cash_assets_lie_form.receivables_amt.value="";
	document.cash_assets_lie_form.short_investments_amt.value="";
	document.cash_assets_lie_form.total_liabilities.value="";
	
	document.getElementById("calculated_result_acid").innerHTML="";
	

	location.reload();
	

}



function validate() {


	var total_cash_amt = document.cash_assets_lie_form.total_cash_amt.value;  
	var receivables_amt = document.cash_assets_lie_form.receivables_amt.value;
	var short_investments_amt = document.cash_assets_lie_form.short_investments_amt.value;
	var total_liabilities = document.cash_assets_lie_form.total_liabilities.value;
	

										// isNaN(number()) checks to see if the user entered a float
	if (total_cash_amt < 0 || isNaN(total_cash_amt) ){
	
		alert("Please enter a valid Total Cash Amount number.");
		document.cash_assets_lie_form.total_cash_amt.value = "";
		
	}
	

	else if (receivables_amt < 0 || isNaN(receivables_amt)){
		alert("Please enter a valid Total Receivables Amount number.");
		document.cash_assets_lie_form.receivables_amt.value="";
		
	}
	
	else if (short_investments_amt < 0 ||  isNaN( short_investments_amt)) {
		alert("Please enter a valid number for Current Total Market Value of Short Term Investments.");
		document.cash_assets_lie_form.short_investments_amt.value="";
		
	}
	else if (total_liabilities < 0 ||  isNaN(total_liabilities) ){
		alert("Please enter a valid Total Liabilities Amount number.");
		document.cash_assets_lie_form.total_liabilities.value= "";
	
	}
	
	else {
        
        calculate(parseFloat(total_cash_amt), parseFloat(receivables_amt), parseFloat(short_investments_amt), parseFloat(total_liabilities));
	}
        
    }


function calculate (total_cash_amt, receivables_amt , short_investments_amt, total_liabilities ) {

	var a = total_cash_amt;
    var b = receivables_amt;
    var c = short_investments_amt;
    var d = total_liabilities;
    
    var result = (a+b+c)/ d;

	
	document.getElementById("calculated_result_acid").innerHTML = result; 
    
}

