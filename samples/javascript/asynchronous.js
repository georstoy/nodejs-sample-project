// callback
setTimeout(() => {
    console.log('Timeout!');
}, 1);

const startInASecond = callback => {
    setTimeout(() => {
        callback();
    }, 1000)
}

// promise
const startInTwoSeconds = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done in 2 seconds!');
        }, 2000)
    })
    return promise;
}

console.log('Timer started...');

startInASecond(() => {
    console.log('This took a second.');
});

startInTwoSeconds()
    .then(text => {
        console.log(text);
        return startInASecond;
    })
    .then(starter => {
        starter(() => {
            console.log('these takes 1 second.');
        })
    })