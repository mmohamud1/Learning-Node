const fs = require('fs');
const path = require('path');

// Create a folder on system (add folder called test to reference)
fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
  if (err) throw err;
    console.log('Folder Created...')
});

// Create and write to file ( add a file called hello.txt to test folder)
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', (err) => {
    if (err) throw err;
    console.log('File with text created...');

    // Append file ( add more text to file)
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I Love node.js', (err) => {
        if (err) throw err;
        console.log('File with text created...')
    });
});

// Read file ( reads context in the file)
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
  if (err) throw err;
    console.log(data)
});

// Rename file (change filename to helloworld.txt)
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err) => {
  if (err) throw err;
    console.log('File Renamed!')
});