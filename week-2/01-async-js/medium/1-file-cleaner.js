// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs=require("fs");

function promisifiedFS(){
    return new Promise(function(resolve){
        fs.readFile("a.txt", "utf-8", (err, data)=>{
            resolve(data);
        })
    })
}

async function main(){
    let data = await promisifiedFS();
    data=data.trim();
    let ansData="";
    let spaceCount=0, wordCount=0;
    for(let i=0; i<data.length; i++){
        if(data[i]!==' '){
            ansData=ansData+data[i];
            if(i<data.length-1 && data[i+1]===' '){
                wordCount++;
            }
        }
        else{
            if(spaceCount<wordCount){
                ansData=ansData+data[i];
                spaceCount++;
            }
        }
    }

    fs.writeFile("a.txt", ansData, function(){
        console.log("Successfully written")
    });
}
main();