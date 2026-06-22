let prom1 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) { reject('No random number was supporting you') }
    else {
        setTimeout(() => {
            console.log('Yes, I am done');
            resolve('Harry')
        }, 100)
    }
})

prom1
.then((a) => { console.log('prom1',a); })
.catch((error) => { console.log('prom1',error); })


let prom2 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {reject('No random number was supporting you2')}
    else {
        setTimeout(() => {
            console.log('Yes, I am done2');
            resolve('Harry2')
        }, 100)
    }
})

prom2
.then((a) => {console.log('prom2', a);})
.catch((error) => {console.log('prom2', error);})

// let p3 = Promise.all([prom1, prom2]) // sab resolve hona chahyie
// let p3 = Promise.allSettled([prom1, prom2]) // isse do ka status value miljayege
// ager reject hui toh reason
// let p3 = Promise.race([prom1, prom2]) // jo pehle Promise resolve ya reject ho woh ho miljayega
// let p3 = Promise.any([prom1, prom2]) // jonsa promise solve hojaega woh miljayega
// let p3 = Promise.reject(prom1) // rejectDirectly resulted rejected 
// let p3 = Promise.resolve(prom1) // resolve


setTimeout(()=>{
    p3.then((a)=>{console.log('p3',a);})
    .catch((err)=>{console.log('p3',err);})
},100)

// p3.then((a)=>{console.log('p3',a);})
// .catch((err)=>{console.log('p3',err);})

// setTimeout(()=>{
//     console.log('promm1',prom1);
// },100)
