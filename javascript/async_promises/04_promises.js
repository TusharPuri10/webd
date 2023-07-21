let promise = fetch('http://github.com/api/search/repositories?q=angular');
//method fetch takes a url is going to return promise ( type system )
// promise is like a normal object
// we can do whatever we want with it

// late in our application at some point that's 
// appropriate to us we can later define the callbacks
// if promise succeeds (then) or fails (catch)

promise.then((result) => {
    //do something with the successful API request
})

promise.catch((error) => {
    //do something with the error
})

