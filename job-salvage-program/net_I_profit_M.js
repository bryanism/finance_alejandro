function startOverOne() {

	document.net_income_form.est_revenue_amt.value="";
	document.net_income_form.expenses_amt.value="";
	
	document.getElementById("calculated_net_income").innerHTML="";
	

	location.reload();
	

}


function startOverTwo() {

	document.prof_marg_form.net_income_amt.value="";
	document.prof_marg_form.revenue_amt.value="";
	
	document.getElementById("calculated_profit_margin_result").innerHTML="";
	

	location.reload();
	

}



function validateOne() {


	var est_revenue_amt = document.net_income_form.est_revenue_amt.value;  
	var expenses_amt = document.net_income_form.expenses_amt.value;


										// isNaN(number()) checks to see if the user entered a float
	if (est_revenue_amt < 0 || isNaN(est_revenue_amt) ){
	
		alert("Please enter a valid number for Estimated Total Revenue(s) Amount.");
		document.net_income_form.est_revenue_amt.value = "";
		
	}
	

	else if (expenses_amt < 0 || isNaN(expenses_amt)){
		alert("Please enter a valid number for Total Expenses Amount.");
		document.net_income_form.expenses_amt.value="";
		

	}
	
	else {
        
        calculateOne(parseFloat(est_revenue_amt), parseFloat(expenses_amt));
	}
        
    }



function validateTwo() {


	var net_income_amt = document.prof_marg_form.net_income_amt.value;  
	var revenue_amt = document.prof_marg_form.revenue_amt.value;


										// isNaN(number()) checks to see if the user entered a float
	if (net_income_amt < 0 || isNaN(net_income_amt) ){
	
		alert("Please enter a valid number for Net Income Amount.");
		document.prof_marg_form.net_income_amt.value = "";
		
	}
	

	else if (revenue_amt < 0 || isNaN(revenue_amt)){
		alert("Please enter a valid number for Estimated Total Revenue(s) Amount.");
		document.prof_marg_form.revenue_amt.value="";
		

	}
	
	else {
        
        calculateTwo(parseFloat(net_income_amt), parseFloat(revenue_amt));
	}
        
    }


function calculateOne ( est_revenue_amt, expenses_amt ) {

	var a = est_revenue_amt;
    var b = expenses_amt;
   
    var resultOne = (a-b) ;

	
	document.getElementById("calculated_net_income").innerHTML = resultOne + "$"; 
    
}



function calculateTwo ( net_income_amt, revenue_amt ) {

	var a = net_income_amt;
    var b = revenue_amt;
   
    
    var resultTwo = (a/b) ;

	
	document.getElementById("calculated_profit_margin_result").innerHTML = resultTwo + "%"; 
    
}


