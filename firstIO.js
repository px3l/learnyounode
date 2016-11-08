let fs = require('fs')

let file = fs.readFileSync(process.argv[2])
let fileLines = file.toString().split("\n").length - 1

console.log(fileLines);