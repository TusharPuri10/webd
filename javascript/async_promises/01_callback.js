let x = 4;
doThingOne(doThingTwo);

function doThingOne(callback) { //callback by help of a funciton
    console.log("Hello thing one");
    callback();
}

function doThingTwo() {
    console.log("Hello thing two");
}

//doThindOne is async function
//and doThingTwo is callback