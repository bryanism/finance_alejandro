function startOver() {

	document.final_begin_time_value_form.beg_ass_amt.value="";
	document.final_begin_time_value_form.final_ass_amt.value="";
	document.final_begin_time_value_form.time_span_amt.value="";
	
	document.getElementById("calculated_compound_annual_growth_rate").innerHTML="";
	

	location.reload();
	

}



function validate() {


	var beg_ass_amt = document.final_begin_time_value_form.beg_ass_amt.value;  
	var final_ass_amt = document.final_begin_time_value_form.final_ass_amt.value;
	var time_span_amt = document.final_begin_time_value_form.time_span_amt.value;
	

										// isNaN(number()) checks to see if the user entered a float
	if (beg_ass_amt < 0 || isNaN(beg_ass_amt) ){
	
		alert("Please enter a valid Total Cash Amount number.");
		document.final_begin_time_value_form.final_ass_amt.value = "";
		
	}
	

	else if (final_ass_amt < 0 || isNaN(final_ass_amt)){
		alert("Please enter a valid Total Receivables Amount number.");
		document.final_begin_time_value_form.final_ass_amt.value="";
		
	}
	
	else if (time_span_amt < 0 ||  isNaN( time_span_amt)) {
		alert("Please enter a valid number for Current Total Market Value of Short Term Investments.");
		document.final_begin_time_value_form.time_span_amt.value="";}
		
	
	else {
        
        calculate(parseFloat(beg_ass_amt), parseFloat(final_ass_amt), parseFloat(time_span_amt));
	}
        
    }


function calculate ( beg_ass_amt, final_ass_amt, time_span_amt ) {

	var a = beg_ass_amt;
    var b = final_ass_amt;
    var c = time_span_amt;
    var d = b/a;
    var e = 1/c;
    
    var result = ((Math.pow(d, e)) - 1) * 100;

	
	document.getElementById("calculated_compound_annual_growth_rate").innerHTML = result + "%"; 
    
}

