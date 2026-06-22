setTimeout(() => {
    console.log('Task1 Completed');
    setTimeout(() => {
        console.log('Task2 Completed');
        setTimeout(() => {
            console.log('Task3 Completed');
        }, 3000)
    }, 2000)
}, 1000)
// or 

// Example
let doneTask = (task, time) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log(task);
            res()
        }, time)
    })
}
// doneTask('Task1 Completed', 1000).then(() => {
//   return  doneTask('Task2 Completed', 2000)
// }).then(() => {
//   return  doneTask('Task3 Completed', 3000)
// }).catch(err=> console.log(err)
// ) 
//              OR

async function run() {
    await doneTask('Task1 Completed', 1000)
    await doneTask('Task2 Completed', 2000)
    await doneTask('Task3 Completed', 3000)
}
run()