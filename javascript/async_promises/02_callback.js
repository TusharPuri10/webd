function doThingOne() //async function
{
    console.log("hello thing one");
}

setTimeout(doThingOne,1000); //callback with help of api

//setTimeout is async function
//and doThingOne is callback