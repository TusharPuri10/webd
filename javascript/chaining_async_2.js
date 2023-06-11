setTimeout(function medicince3get() {
    console.log("medicine 3 recieved");
    setTimeout(function medicince2get() {
        console.log("medicine 2 recieved");
        setTimeout(function medicince1get() {
            console.lof("medicine 1 recieved");
        },1000)
    },2000)
},3000)