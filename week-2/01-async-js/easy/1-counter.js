// Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

const d=new Date();
const start=d.getTime();
setInterval(()=>{
    const date=new Date();
    const currTime=date.getTime();
    console.log(Math.floor((currTime-start)/1000));
}, 1000);