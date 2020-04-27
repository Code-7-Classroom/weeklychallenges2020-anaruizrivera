const fs = require('fs')  

let info = fs.readFileSync(process.argv[2])
let value = info.toString().split('\n').length - 1
console.log(value)