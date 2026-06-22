let doHomeWork = (subject) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(`${subject} homework done`)
        }, 1000)
    })
}

// let finishHomeWork = async () => {
//     try {
//         let my_task1 = await doHomeWork('Math');
//         console.log(my_task1);
//         let my_task2 = await doHomeWork('English');
//         console.log(my_task2);
//         let my_task3 = await doHomeWork('Urdu');
//         console.log(my_task3);
//     } catch (err) {
//         console.log("Math error:", err);
//     }

//     console.log('My all task done');
// }
// finishHomeWork()

//  or

let finishHomeWork = async () => {
    try {
        let results = await Promise.all([
            doHomeWork('Math'),
            doHomeWork('English'),
            doHomeWork('Urdu')
        ]);

        console.log(results);
        console.log('My all task done');
    } catch (err) {
        console.log(err);
    }
};

finishHomeWork();