const fs=require("fs");

function promisiedFS(){
    return new Promise(function(resolve){
        fs.readFile("a.txt", "utf-8", (err, data1)=>{
            resolve(data1);
        })
    })
}

async function main(){
    let data= await promisiedFS();

    data=data+"\nHi from write file"

    fs.writeFile("a.txt",data, (err)=>{
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('Data has been written to the file');
        }
    })
}

main();