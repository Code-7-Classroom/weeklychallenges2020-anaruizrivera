const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, function (error, container) {
  if (error) {
    return console.log(error)
  }

  const lines = container.toString().split('\n').length - 1
  console.log(lines)
})