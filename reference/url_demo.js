const url = require('url');

const myUrl = new URL('http://mywebite.com/hello.html?id=100&status=active');

// Get serialized URL (full URL)
console.log(myUrl.href);

// Get host (root domain)
console.log(myUrl.host);

// Get hostname (does not get port)
console.log(myUrl.hostname);

// Get pathname (e.g hello.html)
console.log(myUrl.pathname);

// get serialized query
console.log(myUrl.search);

// Get params object
console.log(myUrl.searchParams);

// Add params dynamically
myUrl.searchParams.append('abc', '1234');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));