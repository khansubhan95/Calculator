function isNum(c) {
    return (c!=='+' && c!=='-' && c!=='*' && c!=='/' && c!=='=' && c!==null && c!=='.');
}

function isOp(c) {
    return (c==='+' || c==='-' || c==='*' || c==='/' || c==='=');
}

function correctDecimal(evt) {
	console.log('reached here');
	if (/\./.test($("#display").html())) {
		console.log('reached into false');
		$("#display").append('');
	}
	else {
		$("#display").append('.');
	}
}


function isCorrectLength(evt) {
	// console.log($("#display").html().length);
	return $("#display").html().length<=8;
}

$(document).ready(function() {
	var entry;
	var previousVal = null;
	var presentVal = null;
	var query = '';
	var result;
	var set=false;
	$("button").click(function() {
		entry = $(this).attr('value');
		previousVal = presentVal;
		presentVal = entry;

		if (presentVal==="C") {
			entry = '';
			previousVal = null;
			presentVal = null;
			result = '';
			set = false;
			query = '';
			$("#display").html('0');
		}

		if (presentVal==='=') {
			console.log(query);
			query+= $("#display").html();
		}

		if (isNum(presentVal) && previousVal===null)
			$("#display").html(presentVal);
		else if(isNum(presentVal) && isNum(previousVal) && isCorrectLength()) 
			$("#display").append(presentVal);
		else if (isOp(presentVal) && isNum(previousVal)) {
			if (presentVal === "=") {
				console.log(query);
				result = eval(query);
				$("#display").html(Math.round(result*100)/100);
				query = '';
				presentVal = result;
				set = true;
				// console.log(query);
			}
			else {
				// if (set) {
				// 	query += presentVal;
				// }
				// else {
					query += $("#display").html()+presentVal;
					console.log(query);
				// }
				
			} 
		}
		else if (isNum(presentVal) && isOp(previousVal))
			$("#display").html(presentVal);
		else if(presentVal==="=" && previousVal ==="=") {
			$("#display").append('');
		}
		else if(isOp(presentVal) && isOp(previousVal)) {
			query[query.length-1] = presentVal;
		}
		else
			console.log('p');
		
	});
});