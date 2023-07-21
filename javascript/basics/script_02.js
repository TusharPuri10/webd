

function sumAll(startIndex, endIndex) {
	var sum = 0;
	for( var i = startIndex; i<endIndex;i++) {
		sum+=i;
	}
	return sum;
}

var sum = sumAll(1,10)
console.log(sum);


