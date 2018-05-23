//"answer.indexOf" looks for "answer" if included in a sentence 

var answer = prompt("are we there yet?");

while(answer.indexOf("yes") === -1) {
	var answer = prompt("are we there yet?");
}

alert("Yay, we made it!");