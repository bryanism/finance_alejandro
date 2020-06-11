function startOver() {

	document.debt_ratio_data_form.liabilities_amt.value="";
	document.debt_ratio_data_form.receivables_amt.value="";
	
	
	document.getElementById("calculated_result_debt_ratio").innerHTML="";
	

	location.reload();
	

}



function validate () {


	var liabilities_amt = document.debt_ratio_data_form.liabilities_amt.value;  
	var receivables_amt = document.debt_ratio_data_form.receivables_amt.value;
	

										
	if (liabilities_amt < 0 || isNaN(liabilities_amt) ) {
	
		alert("Please enter a valid number for Total Liabilities Amount.");
		document.debt_ratio_data_form.liabilities_amt.value = "";
		
	}
	

	else if (receivables_amt < 0 || isNaN(receivables_amt)) {
		alert("Please enter a valid number for Total Receivables Amount.");
		document.debt_ratio_data_form.receivables_amt.value= "";
		
	}

	
	
	else {
        
       calculate(parseFloat(liabilities_amt), parseFloat(receivables_amt));
	}
        
    } 

function calculate (liabilities_amt, receivables_amt) {

	var a = liabilities_amt;
    var b = receivables_amt;
    var result = a/b;
    
    
    
	document.getElementById("calculated_result_debt_ratio").innerHTML = result  ; 
    
} ;