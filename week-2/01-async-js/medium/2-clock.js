// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

setInterval(()=>{
    const d=new Date();
    const secs=d.getSeconds();
    const mins=d.getMinutes();
    const hours=d.getHours();
    let formattedSec = secs < 10 ? '0' + secs : '' + secs;//could have followed DRY a little bit here//i failed there
    let formattedMin = mins < 10 ? '0' + mins : '' + mins;
    let formattedHours = hours < 10 ? '0' + hours : '' + hours;
    let flag= hours<12 ? "AM": "PM";
    let time=formattedHours+":"+formattedMin+":"+formattedSec+" "+flag;
    console.log(time);
},1000);
