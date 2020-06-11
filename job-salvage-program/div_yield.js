function startOverstuff() {

	document.div_yield_form.company_name.value="";
	document.div_yield_form.asset_value_amt.value="";
	document.div_yield_form.div_per_share_amt.value="";
	
	document.getElementById("calculated_result_div_yield").innerHTML="";
	

	location.reload();
	

}



function validateStuff() {


	var asset_value_amt = document.div_yield_form.asset_value_amt.value;  
	var div_per_share_amt = document.div_yield_form.div_per_share_amt.value;
	

										
	if (asset_value_amt < 0 || isNaN(asset_value_amt) || isNaN(div_per_share_amt) ) {
	
		alert("Please enter a valid Market Price for One Share number.");
		document.div_yield_form.asset_value_amt.value = "";
		
	}
	

	else if (div_per_share_amt < 0 || isNaN(div_per_share_amt) || isNaN(asset_value_amt)) {
		alert("Please enter a valid Annual Cash Dividend Per Share number.");
		document.div_yield_form.div_per_share_amt.value= "";
		
	}

	
	
	else {
        
       calculate(parseFloat(asset_value_amt), parseFloat(div_per_share_amt), company_name);
	}
        
    } 

function calculate (asset_value_amt, div_per_share_amt, company_name) {

	var a = asset_value_amt;
    var b = div_per_share_amt;
    var c = company_name;
    var result = (b/a)*100;
    
    
    
	document.getElementById("calculated_result_div_yield").innerHTML = (result + "%") ; 
    
} ;