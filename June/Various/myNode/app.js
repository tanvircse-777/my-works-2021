const {readFileSync, writeFileSync, writeFile, readFile}=require('fs');

readFile('./content/firsttext.txt','utf8', (err, result)=>{
    if(err){
        console.log(err);
    }
    console.log(result);
})