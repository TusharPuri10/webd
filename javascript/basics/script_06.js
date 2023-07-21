const fs = require('fs')
function sum(n) {
	let sum = 0
	for( var i=0; i<n;i++)
		sum+=i;

	console.log(sum);
}

function fileIsRead(err, contents) {
	sum(contents);
	console.log("File is read")
}

sum(17)
sum(18)
sum(19)
sum(20)

fs.readFile("chocolate.txt",'utf8',fileIsRead);

sum(21);
sum(23);
sum(24);
sum(28);


