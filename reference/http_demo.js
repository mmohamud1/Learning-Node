const http = require('http');

// Create a server object
http.createServer((req, res) => {
    // Write response
    res.write("Hello World");
});