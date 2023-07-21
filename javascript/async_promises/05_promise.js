// let promise = fetch('http://github.com/api/search/repositories?q=angular')
//     .then(result => {
//         return fetch('urlNumberTwo');
//     })
//     .then(result => {
//         return fetch('urlNumberThree');
//     })

let promise = fetch('http://github.com/api/search/repositories?q=angular')
    .then(result => fetch('urlNumberTwo'))
    .then(result => fetch('urlNumberThree'))

promise.then((result) => { //this callback runs when all three of callbacks above succed each happening asynchronously
    //do something with the successful API request
})

promise.catch((error) => { //this callback will catch error across any of these asynchronous events/request
    //do something with the error
})

// getUrl('url1', (success) => {
//     getUrl('url2', success => {
//         getUrl('url3',success =>
//         )
//     })
// })

//complex nested structure in case of callbacks

