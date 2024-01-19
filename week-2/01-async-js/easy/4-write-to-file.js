// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs=require("fs");

// let data="";

// fs.readFile("a.txt", "utf-8", (err, data1)=>{
//     data=data1;
// })

// data=data + "\nHI there from write file" 
//this will throw major error because of async behaviour

fs.writeFile("a.txt",data, (err)=>{
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('Data has been written to the file');
    }
})