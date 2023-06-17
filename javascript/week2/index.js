
const express = require('express')
const app = express()
const port = 3000

function handleFirstRequest(req, res) {
    let sum = calculateSum(req.query.counter1)+calculateSum(req.query.counter2)+calculateSum(req.query.counter3);//query param
    let ans = "the sum is " + sum;
    res.send(ans);
}

function handleSecondRequest(req, res) {
    res.send("Hello World");
}
function handleSecondRequest(req, res) {
    res.send("Hello World");
}

app.get('/handlesum', handleFirstRequest)

app.get('/getmessage', handleSecondRequest)
app.get('/:username', handleSecondRequest)
// app.post('/createUser',createUser)

function started(){
    console.log(`Example app listening on port ${port}`)
}

app.listen(port,started);

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