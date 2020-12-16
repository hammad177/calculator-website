let getHistory = () => document.getElementById('history-value').innerText;

let printHistory = num => document.getElementById('history-value').innerText=num;

let getOutput = () => document.getElementById('output-value').innerText;

let printOutput = num => {
    if(num==""){
        document.getElementById('output-value').innerText=num;
    }
    else{
        document.getElementById('output-value').innerText=getFormattedNumber(num);
    }
}

let getFormattedNumber = num =>{
    if(num=="-"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString('en');
    return value
}

let reverseFormatNumber = num => Number(num.replace(/,/g,''));

var operator = document.getElementsByClassName('operator');
for(var i = 0 ; i < operator.length ; i++){
	operator[i].addEventListener('click', function(){
		if(this.id=='clear')
		{
			printHistory('');
			printOutput('');
		}
		else if(this.id == 'backspace'){
			var value = reverseFormatNumber(getOutput()).toString();
			if(value){
				value=value.substr(0,value.length-1);
				printOutput(value);
			}
		}
		else{
			var output = getOutput();
			var history = getHistory();
			if(output != ''){
				output = reverseFormatNumber(output);
				history += output;
				if(this.id == '='){
					var result = eval(history);
					printOutput(result);
					printHistory('');
				}
				else{
					history += this.id;
					printHistory(history);
					printOutput('');
				}
			}
		}
	})
}

var number = document.getElementsByClassName('number');
for(var i = 0 ; i < number.length ; i++){
	number[i].addEventListener('click', function(){
		var output = reverseFormatNumber(getOutput());
		if(output != NaN || output == '.'){
			output += this.id;
			printOutput(output);
		}
	})
}