let login = false
let myPromise = new Promise((resolve, reject) => {
    if (login) {
        resolve({ status: 1, msg: 'Login Done' })
    } else {
        reject({ status: 0, msg: 'Invalid username or password' })
    }
})
console.log(myPromise);

myPromise
.then((response) => {
    console.log(response);
})
.catch((err) => {
    console.log(err, 'err');
})