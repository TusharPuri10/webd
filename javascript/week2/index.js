const express = require('express')
var bodyparser = require('body-parser')
const app = express()
const port = 3000

// function middleware(req,res,next) // used to capture global things before it reaches actual handler
// {
//     console.log("From inside middleware " + req.headers.age1 + req.headers.age2);
//     if(req.headers.age1>=18 && req.headers.age2>=21)
//     {
//         next();
//     }
//     else
//     {
//         res.send("Not legal age to use app");
//         // next(); control reaches below where app.get and app.post are written
//     }
// }

//currently don't worry about req,res,next....

app.use(bodyparser.json()); // used to extract body from request
// app.use(middleware);

function handleFirstRequest(req, res) { //callback function that gets triggered , In this call back function I need to handle the request(req) and provide some reponse(res)
    let sum = calculateSum(req.query.counter1)+calculateSum(req.query.counter2)+calculateSum(req.query.counter3);//query param
    let ans = {
        ans: sum
    }
    res.send(ans);// res expects only string
}

function handleSecondRequest(req, res) {
    res.status(401).send("Hello World");
    // 200 status is default
}

function handleThirdRequest(req, res) {
    console.log(req.headers);
    let sum = calculateSum(req.headers.age);
    let ans = "the sum is " + sum;
    res.send(ans);// res expects only string
}

function handleFourthRequest(req, res) {
    // console.log(req.headers.age1 + req.headers.age2 + req.query.counter1 + req.query.counter2);
    res.send("Succesfully run: " + req.headers.age1 + req.headers.age2 + req.query.counter1 + req.query.counter2 + " and sum from body is: " + calculateSum(req.body.counter));

    //Now body
    console.log(req.body) // undefined

}

function handleFifthrequest(req,res)
{
    if(req.body.counter <= 1000)
    {
        res.send(calculateSum(1000).toString());
    }
    else
    {
        res.status(401).send("You have sent very big number");
    }
}

function handleSixthrequest(req,res)
{
    var counter = req.body.counter;
    var calculatedsum = calculateSum(counter);
    var calculatedmul = calculateMul(counter);
    var answerobject = {
        sum: calculatedsum,
        mul: calculatedmul
    }
    res.send(answerobject)

    //there's also a res.json which ensures you are sending only json
}

function handleSeventhrequest(req, res)
{
    res.send(
        {
            sum: 25
        }
    )
}

//Significance of routes is that each routes does a different thing

// These are route handlers
//you can have same routes with different methods (C-post, R-get, U-put, D-delete)
app.get('/handlesum', handleFirstRequest) // any time there is a request on this function, call this callback function, this call back function has different parameters ( here req & res) based on which library is used to process the request
app.get('/getmessage', handleSecondRequest)
// app.get('/:username', handleSecondRequest)
app.post('/handlesum',handleThirdRequest)
app.post('/hybrid',handleFourthRequest)
app.post('/status',handleFifthrequest)
app.post('/sendingjson',handleSixthrequest)
app.get('/sendjsonbrowser',handleSeventhrequest)
app.get('/html',givepage)
//app.get('/userlogin, loginauthenticate(), handleLogin) // you can also make route specific middleware

function started(){
    console.log(`Example app listening on port ${port}`)
}

app.listen(port,started); // this function is like setInterval, a long running process, it is always up, it exposes http server on port 3000 and it starts "listening for request" on this port
//what is port ??? For now it is just like a URL
// "listening for any incoming request on localhost:3000"
// How we request process is different thing


function calculateSum(counter) {
    var sum=0;
    for(let i=1;i<counter;i++)
    {
        sum = sum+i;
    }
    return sum;
}

function calculateMul(counter) {
    var mul=1;
    for(let i=1;i<counter;i++)
    {
        mul = mul*i;
    }
    return mul;
}

function givepage(req,res)
{
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>
            Hello from page
        </title>
    </head>
    <body>
        <b>Hi there</b>
    </body>
    </html>`)

    //res.sendFile(__dirname + "/index.html")
}

// NOde package Manager

// IN MERN E is express like you used const fs similarly you will use const express but first npm install express

// query param can be send by Browser
// header and body cannot be send by browser so we use postman
// express gives you query and header from req but not body
//body is extracted from requested by body-parser (npm install body-parser)

//status codes
//1xx informational
//2xx success
//3xx redirection
//4xx client error
//5xx servere error


//browser can talk to http server
//postman can talk to http server
//http server can talk to http server