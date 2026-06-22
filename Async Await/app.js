let doneTask = (task, time) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            // console.log(task);
            res(task)
        }, time)
    })
}
let login = true
let myPromise = new Promise((resolve, reject) => {
    if (login) {
        resolve({ status: 1, msg: 'Login Done' })
    } else {
        reject({ status: 0, msg: 'Invalid username or password' })
    }
})
let doHomeWork = (subject) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(`${subject} homework done`)
        }, 1000)
    })
}
let finishHomeWork = async () => {
    let my_task1 = await doHomeWork('Math')
    console.log(my_task1);
    let my_task2 = await doHomeWork('English')
    console.log(my_task2);
    let my_task3 = await doHomeWork('Urdu')
    console.log(my_task3);
    console.log('My all task done'); 
    
    await console.log(myPromise);
    console.log(doHomeWork('Urdu'));
    
    let checkall = await Promise.all([
        doHomeWork('Math'),
        myPromise,
        doneTask('Eating', 2000),
        doHomeWork('English'),
        doHomeWork('Urdu')
    ])
    console.log(checkall);
    
}
finishHomeWork()


