const {readFileSync, writeFileSync, writeFile}=require('fs');

const first=readFileSync('./content/firsttext.txt','utf-8');
const second=readFileSync('./content/secondtext.txt','utf-8');

writeFileSync('./content/result-sync.txt', `Here is the result : ${first} ${second}`,{flag:'a'})