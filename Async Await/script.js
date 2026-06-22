function getData() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
           resolve(455) 
        }, 3500);
    })    
}

console.log('Loading modules');

console.log('Dp something else');

console.log('Load data');

async function name(params) {
    let data = await getData()
console.log(data);
}
name()

console.log('Process data');


