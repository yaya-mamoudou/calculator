function equate(){
	 var x=document.getElementById("num1").value;
	var y=document.getElementById("num2").value;
	var sign=document.getElementById("operation").value;
	var z=document.getElementById("result");
	var result;
	if(sign==="+"){
		result = eval(x)+eval(y);
		z.value = result;
		console.log(result);
	}
	else if(sign==="-"){
		result=eval(x)-eval(y);
		z.value=result;
	}
	else if(sign==="*"){
		result=eval(x)*eval(y);
		z.value=result;
	}
	else if(sign==="/"){
		result=eval(x)/eval(y);
		z.value=result;
	}
	else if(sign==="%"){
		result=eval(x)%eval(y);
		z.value=result;
	}

}