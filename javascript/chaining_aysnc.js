function medicince2get() {
    console.log("medicinne 2 recieved");
}

function medicine1get() {
    console.log("medicine 1 recieved");
    setTimeout(medicince2get,2000);
}

setTimeout(medicine1get,1000);