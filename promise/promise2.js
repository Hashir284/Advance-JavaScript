let myPromise1 = new Promise((resole,rej)=>{
    resole('Welcome')
})
myPromise1.then((res)=>console.log(res)).catch((err)=>console.log(err))

let login = true
let myPromise = new Promise((resolve, reject) => {
    if (login) {
        resolve({ status: 1, msg: 'Login Done' })
    } else {
        reject({ status: 0, msg: 'Invalid username or password' })
    }
})

myPromise
.then((response) => {
    console.log(response);
})
.catch((err) => {
    console.log(err, 'err');
})

console.log(myPromise);

