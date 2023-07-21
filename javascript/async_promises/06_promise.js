function getMyData() {
    return new Promise((resolve, reject) => {
        fetch('url')
        .then(result => {
            console.log("url success")
            resolve(result)
        })
        .then(error => {
            fetch('url2')
            .then(succ => resolve(succ))
            .catch(err => reject(err))
            reject(error)
        })
    })
}

let promise2 = getMyData();
promise2.then(result => {
    //...
});
promise2.catch(error => {
    //...
});