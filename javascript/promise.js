const fs = require('fs')

function promiseBody(resolve) {
    setTimeout(resolve, 5000)
}

function medicince1get() {
    var answer = new Promise(promiseBody)
    return answer
}

function printThing() {
    console.log("medicince 1 received");
}

var medicine = medicince1get();
console.log(medicine);
medicine.then(printThing);

// this is givr same output as this
// function medicince1get () {
//     console.log("medicine 1 recieved");
// }

// setTimeout(medicince1get,5000)


