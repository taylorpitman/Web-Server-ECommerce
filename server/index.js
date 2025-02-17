/* NODE BASICS */


// Single line comment

/*  Multi
    line 
    comment */

// Display on the console
// you can use node by typing node server/index.js in the terminal
console.log("hello world");

/* Module Systems - whatever you have in a code file is local to that file. 
    One file = one module  
    2 main module systems: 
        1) CommonJS (Node.js) - We will be using CommonJS and javascript for our backend
        2) ES Modules (ES6) - Typescript uses a variant of ES Modules, we will be using type script for our frontend
    */

/* Variables
    var is not used anymore because it is global and causes conflicts
    let (can be reassigned)
    const (cannot be reassigned) - use constants whenever possible(try to stick to functional programming)
    you don't have to assign a type to a variable. Also you can change the type of a variable at any time
 */  

/* Modules - a way to split up your code into separate files
    You can export a module by using module.exports
    You can import a module by using require
    You can import a module by using import (./ - relative path, ../ - go up a directory, otherwise using global modules)
    
    Modules vs packages
    Packages - can have many modules inside of it but usually has one main module that exposes the rest
    Modules - one file 
*/

//Load the http module to create an http server.  
const http = require('http');  // HTTP module - built in module in node.js
const PORT = 8000;  // PORT number

//Arrow function - a more concise way to write functions 
// (param1, param2, ..., paramN) => expression
const server = http.createServer((req, res) => {        // create a server
    res.writeHead(200, {'Content-Type': 'text/plain'});     // write a response to the client
    res.end('Hello World\n');                               // end the response
});

/* Async function - a function that returns a promise
    a promise is an object that represents the eventual 
    completion (or failure) of an asynchronous operation and its resulting value 
*/
server.listen(PORT, () => { // the server object listens on port 8080
    console.log(`Server running at http://localhost:${PORT}/`); // back ticks are used for string interpolation
});


 //SAME AS ABOVE!
/* const serverRegular = http.createServer(function handler (req, res) {            // create a server
     res.writeHead(200, {'Content-Type': 'text/plain'});     // write a response to the client
     res.end('Hello World\n');                               // end the response
 }); */

/*Arrow Functions vs Regular Functions
    Arrow functions don't have their own 'this' keyword (inherits the this keyword from the parent scope)
    Arrow functions don't have their own 'arguments' object (inherits the arguments object from the parent scope)
    Arrow functions can't be used as constructors (can't use the 'new' keyword)
    Arrow functions can't have duplicate named parameters 
    Arrow functions can't have a 'yield' keyword
*/

// no return statement needed
/* const square = x => x * x; //Create a new function "square" that takes in a parameter x and returns x * x */

/* const square2 = function(x) {
     return x * x;
 } //same as above but using a regular function */




 /* NPM - Node Package Manager 
    (NPM CLI) System within node that its own CLI that manages your node package/program
    (NPM Servers) that host a bunch of packages/services that you can use
    
    Only successful forks of NPM are Yarn(meta) and PNPM(stores files behind the scenes in a different way)

    NPM Commands
    npm init - creates a package.json file
    npm install - installs all dependencies in the package.json file
    npm install <package> - installs a package
    npm install <package> --save-dev - installs a package as a dev dependency
    npm install -g <package> - installs a package globally
    npm uninstall <package> - uninstalls a package
    npm update - updates all packages
    npm update <package> - updates a package
    npm outdated - checks for outdated packages
    npm run <script> - runs a script from the package.json file
    npm start - runs the start script from the package.json file
    npm test - runs the test script from the package.json file
    npm stop - stops the server
    npm publish - publishes a package to npm
    npm login - logs into npm
    npm logout - logs out of npm
    npm whoami - checks who you are logged in as
    npm search <package> - searches for a package
*/ 