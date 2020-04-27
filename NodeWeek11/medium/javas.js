var fs = require('fs');

fs.readFile('file.txt', 'utf8', function(error, data) {
    if (error) throw error;
    console.log(data);
});