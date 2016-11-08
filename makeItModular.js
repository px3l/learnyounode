let mymodule = require('./mymodule')
let filePath = process.argv[2]
let fileExt = process.argv[3]

mymodule(filePath, fileExt, function(err, data){
  if (err) {
    console.error(err)
    process.exit(1)
  }
  data.forEach(function(file){
  	console.log(file)
  })
});