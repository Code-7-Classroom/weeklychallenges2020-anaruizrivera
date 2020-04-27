const fs = require('fs')
const path = require('path')

let container = process.argv[2]
let first = '.' + process.argv[3]

fs.readdir(container, (error, module) => {
  if (error) return console.error(error)
  module.forEach( (file) => {
    if (path.extname(file) === first) {
      console.log(file)
    }
  })
})