const fetch = require('node-fetch')

const promise = fetch('https://jsonplaceholder.typicode.com/todos/1')

promise
    .then(response => response.json())
    .then(user => {
        throw new Error('uh oh');
        return user;
    })
    .then(json => console.log(json))
    .catch(err => console.error('😥',err));

console.log("🍔 synchronous");