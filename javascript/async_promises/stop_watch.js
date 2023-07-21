var counter = 1;
var counter2 = 1;

function printCounter() { // this is a callback function
    console.clear();
    console.log(counter);
    counter = counter + 1;
}

setInterval(printCounter, 1000) //this is async function

for( var i=0;i<100000;i++)
    counter2=counter2+1;
console.log(counter2);
