
const express = require('express')
const app = express()
const port = 3000

function handleFirstRequest(req, res) { //callback function that gets triggered , In this call back function I need to handle the request(req) and provide some reponse(res)
    let sum = calculateSum(req.query.counter1)+calculateSum(req.query.counter2)+calculateSum(req.query.counter3);//query param
    let ans = "the sum is " + sum;
    res.send(ans);
}

function handleSecondRequest(req, res) {
    res.send("Hello World");
}

//Significance of routes is that each routes does a different thing

app.get('/handlesum', handleFirstRequest) // any time there is a request on this function, call this callback function, this call back function has different parameters ( here req & res) based on which library is used to process the request
app.get('/getmessage', handleSecondRequest)
app.get('/:username', handleSecondRequest)
// app.post('/createUser',createUser)

function started(){
    console.log(`Example app listening on port ${port}`)
}

app.listen(port,started); // this function is like setInterval, a long running process, it is always up, it exposes http server on port 3000 and it starts "listening for request" on this port
//what is port ??? For now it is just like a URL
// "listening for any incoming request on localhost:3000"
// How we request process is different thing


function calculateSum(counter) {
    var sum=0;
    for(let i=0;i<counter;i++)
    {
        sum = sum+i;
    }
    return sum;
}

// NOde package Manager

// IN MERN E is express like you used const fs similarly you will use const express but first npm install express