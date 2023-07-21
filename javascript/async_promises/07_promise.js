//nodejs and browser always running single threaded event loop
//to run code

// on the first go around it will run all of your synchronous code
// it will also queue up asynchronous event to be called back later

// getData(callback) ... event loop will say "okay web APIS you do your thing in separate thread pool while I do my thing"
// then at some point in future getData will finish and let the event loop know that it is ready to callback( as my callback function is in callback queue)

// NOW THINGS WILL GET INTERESTING

// IF "Macro Task" like a setTimeour or setInterval it will be executed on next event loop

// IF "Micro Task" like a fulfilled promise then it will be called back before the start of the next event loop

// micro Task >>> macro task
//L1
console.log("🍔 Synchronous 1");

//L2
setTimeout(_ => console.log("🥯 Timeout 2"), 0);

//L3
Promise.resolve().then(_ => console.log("🧋 Promise 3"));

//L4
console.log("🍔 Synchronous 4");