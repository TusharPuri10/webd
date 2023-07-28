//needs to do something which acts as browser/postman which will send request

function logResponseBody(jsonBody)
{
    console.log(jsonBody);
}
function callbackFn(result)
{
    console.log(result.status);
    result.json().then(logResponseBody);
}
var sendObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json" // Set the Content-Type header to indicate JSON data
    },
    body:  JSON.stringify({ "counter" : 10 }) // Convert the object to a JSON string
}
// fetch("http://localhost:3000/handlesum?counter1=100&counter2=234&counter3=55", sendObj).then(callbackFn)//returns a promise
fetch("http://localhost:3000/sendingjson", sendObj).then(callbackFn)//returns a promise