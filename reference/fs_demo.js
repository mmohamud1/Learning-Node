const fs = require('fs');
const path = require('path');

// Create a folder on system (add folder called test to reference)
fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
    if (err) throw err;
    console.log('Folder Created...')
});