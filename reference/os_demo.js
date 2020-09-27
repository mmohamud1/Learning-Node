const os = require('os');

// Check platform (e.g Mac or Windows)
console.log(os.platform());

// CPU architeture 
console.log(os.arch());

// CPU core info
console.log(os.cpus());

// Check free memory
console.log(os.freemem());

// Check total memory 
console.log(os.totalmem());

// Check home directory
console.log(os.homedir());

// Uptime (amount of time system has been up)
console.log(os.uptime());