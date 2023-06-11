const fs = require('fs');

function sum(n) {
	let sum = 0;

	for( let i=0;i<n;i++)
		sum+=i;

	console.log(sum)
}

sum("barry")
