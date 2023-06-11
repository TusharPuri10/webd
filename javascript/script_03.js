function sum (index1 , index2) {
	return index1 + index2;
}

function multiply (index1, index2) {
	return index1*index2;
}

function divide (index1, index2) {
	return index1/index2;
}

//one way to do a callback, we will see later about it
function doArithematic(firstEl, secondEl, arithematicFn) {
	return arithematicFn(firstEl,secondEl);
}

var answer = doArithematic(1,2,sum);
console.log(answer)
