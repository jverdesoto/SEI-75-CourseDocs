const fs = require('fs');

fs.writeFile(
    './hello.txt', 
    'Hello!', 
    function() {
  console.log('done creating file');
});