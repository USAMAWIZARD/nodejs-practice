const fs = require('fs')

filecontent=fs.readFileSync('a.txt',{encoding:'utf-8',}).toString()
console.log(filecontent)
fs.writeFileSync('a.txt','i wrote it')