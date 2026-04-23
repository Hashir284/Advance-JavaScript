let prom1 = new Promise((resolve, reject)=>{
    let a = Math.random()
    if(a<0.5){
        reject('No random number was supporting you')
    }
    else{
        setTimeout(()=>{
        console.log('Yes, I am done');
        resolve('Harry')
    }, 100)
    }
})

prom1.then((a)=>{
    console.log(a);
    return 2
}).catch(
(error)=>{
    console.log(error);}
)
console.log(prom1);


let prom2 = new Promise((resolve, reject)=>{
    let a = Math.random()
    if(a<0.5){
        reject('No random number was supporting you2222')
    }
    else{
        setTimeout(()=>{
        console.log('Yes, I am done2222');
        resolve('Harry2222')
    }, 100)
    }
})

prom2.then((a)=>{
    console.log(a);
}).catch(
(error)=>{
    console.log(error);
}
)