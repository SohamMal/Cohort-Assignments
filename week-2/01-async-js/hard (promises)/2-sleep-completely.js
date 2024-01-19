/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const d=new Date;
    const start=d.getTime();
    return new Promise(function(resolve){
        const d=new Date;
        const current=d.getTime();
        while(current - start < milliseconds){
            const d1=new Date;
            current=d1.getTime();
        }
        resolve();
    })
}

module.exports = sleep;
