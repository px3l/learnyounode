var fs = require("fs")

var fileContents = fs.readFileSync(process.argv[2])
var fileString = fileContents.toString()
var fileArray = fileString.split("\n")

var answer = fileArray.length - 1

console.log(answer);