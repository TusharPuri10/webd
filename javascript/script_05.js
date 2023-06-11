function starLine(n) {
	var ans = "";
	for(var i=0;i<n;i++);
		ans+="**";
	console.log(ans)
}

function starryPattern(n) {
	for(var i=0;i<n;i++)
		starLine(i);
}

starryPattern(5);
