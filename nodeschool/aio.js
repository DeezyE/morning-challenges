var fs = require('fs')

function countLines(callback) {
  fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    let lines = fileContents.toString().split("\n") 
    let count = lines.length - 1     
    // console.log(count)
    
    callback(count)
  })
}

function logCount(count) {
  console.log(count)
}
  


// console.log(process.argv[2])
countLines(logCount)