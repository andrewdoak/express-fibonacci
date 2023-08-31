// Load express
const express = require('express');

// Create our express app
const app = express();
// Define a "root" route directly on app

// Fibonacci function
function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let num3 = 0;
    while (num3 < num) {
        num3 = num1 + num2;
        num1 = num2
        num2 = num3
    }

    return num3 === num;
}
console.log(fibonacci(0))

// Mount routes
app.get('/', function(req, res) {
    res.send(`<h1>Fibonacci Time</h1>`)
    console.log(fibonacci(5), req.params.num)
  });

app.get('/fibonacci/:num', function(req, res) {
    if (fibonacci(Number(req.params.num))) {
        res.send("Very well. This is fibonacci.")
    } else {
        res.send("I can tell, this is not fibonacci.")
    }
  });

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});

/* 
LAB URL
https://perscholas.instructure.com/courses/1514/assignments/297776?module_item_id=966115
*/