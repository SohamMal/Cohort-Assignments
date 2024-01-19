// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

const counter=(start)=>{
    console.log(start);

    if(start<10){
        start++;
        setTimeout(()=>counter(start),1000)
    }
}

counter(1);