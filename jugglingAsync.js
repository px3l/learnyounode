var http = require("http");
var bl = require("bl");

// pushing urls to an array

var urls = []

for (var i=2; i<process.argv.length; i++) {
	var url = process.argv[i]
	urls.push(url)
}

// array of functions to run with each value

var handlers = urls.map(function(url){
	return function(callback){
		http.get(url, function(response){
			response.pipe(bl(function (err, data){
				if (err) return callback(err)
				callback(null, data.toString())
			}))
		})
	}
})

// store the url responses

var storage = []
var counter = 0

handlers.forEach(function(fn, i){
	fn(function(err, data){
		storage[i] = data
		counter++
		if (counter >= urls.length){
			storage.forEach(function(st){
				console.log(st)
			})
		}
	})
})