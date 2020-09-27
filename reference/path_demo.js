const path = require('path');

// Basename (gets base file name)
console.log(path.basename(__filename));

// Directory name (folder name)
console.log(path.dirname(__filename));

// File extension (e.g .js or .html)
console.log(path.extname(__filename));

// Create path object (object with file root, dir, base, ext and name)
console.log(path.parse(__filename));

// Concatonate paths (add extra paths)
// add ../test/hello.html to reference folder
console.log(path.join(__dirname, 'test', 'hello.html'));