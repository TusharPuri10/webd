let x = 4;
navigator.geolocation.getCurrentPosition(
    (successData) =>  { //not running either of callback until the above action completes
        //do something with success data
    },
    (failureData) => {
        //do something with failure data
    })

    //problem with callbacks
    //we end up having to create success failure cases lots of time
    // also we had to define them close to our asynchronous function
    //here async function is getCurrentPosition
    // and success and failures are call backs

    //better way to do these things is promises
    //it can get deeply nested as well which is called callback hell
    

    setTimeout(() => console.log('hi'),1000);