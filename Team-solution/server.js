// Require/import the HTTP module
const express = require('express');
//const path = require('path');

// Define a port to listen for incoming requests
const app=express();
const PORT = process.env.PORT || 3000;

//express app
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// function handleRequest(request, response) {

//     response.end("It Works!! Path Hit: " + request.url);
// }


// var server = http.createServer(handleRequest);





//router
// =============================================================

require('./routers/htmlRouter')(app);


//listener
// =============================================================
app.listen(PORT, function () {

    console.log("Server is now running on: http://localhost:" + PORT);
});