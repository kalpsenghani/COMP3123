var http = require("http");

const employees = require('./Employee');

console.log("Lab 03 - NodeJs");

// Define Server Port
const port = process.env.PORT || 8081;

// Create Web Server using CORE API
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.method !== 'GET') {
        res.end(JSON.stringify({ error: http.STATUS_CODES[405] }));
    } else {
        if (req.url === '/') {
            // Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.setHeader('Content-Type', 'text/html');
            res.end("<h1>Welcome to Lab Exercise 03</h1>")
            return;
        }

        if (req.url === '/employee') {
            // Display all details for employees in JSON format
            res.end(JSON.stringify(employees))
            return;
        }

        if (req.url === '/employee/names') {
            // Display only all employees {first name + last name} in Ascending order in JSON Array
            let employeeNames = employees.map(emp => `${emp.firstName} ${emp.lastName}`);
            employeeNames.sort(); 
            res.end(JSON.stringify(employeeNames))
            return;
        }

        if (req.url === '/employee/totalsalary') {
            // Display Sum of all employees' salary in given JSON format
            let totalSalary = employees.reduce((sum, emp) => sum + emp.Salary, 0);
            res.end(JSON.stringify({ total_salary: totalSalary }))
            return;
        }

        // If no valid route is found
        res.end(JSON.stringify({ error: http.STATUS_CODES[404] }));
    }
});

// Start the server and listen on the specified port
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
