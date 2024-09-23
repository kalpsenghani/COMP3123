const os = require('os');
const http = require('http');
const fs = require('fs');
const path = require('path');

//console.log(os.cpus());
//console.log(os.homedir());
// console.log(os)

http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Home Page</h1>');
    }

    if(req.url == '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>About Page</h1>');
    }

    if(req.url == '/student'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Student Page</h1>');
        const stud = {
            name: 'John Doe',
            age: 20,
            course: 'Computer Science'
        }
        res.write(JSON.stringify(stud))
    }
    //res.write('Hello World');
    res.end();
    //res.end('Hello World
}).listen(3001, () => {
    console.log('Server is running on port 3001');
});