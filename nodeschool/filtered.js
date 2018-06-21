const fs = require('fs')
const path = require('path')

// console.log(process.argv[2])

const buttFiles = fs.readdir(process.argv[2], function callback (err, list) {
    let extension = "." + process.argv[3]

    // console.log(extension)

    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        if (path.extname(element) === extension) {

            console.log(element)
        } 
    }
})