const fs = require('fs')

let buff = fs.readFileSync(process.argv[2])

let st = buff.toString().split("\n")

console.log(st.length - 1)