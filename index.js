// Set up express
const express = require("express");
const app = express();
const port = 8000;

//load routes from main.js
const mainRoutes = require("./routes/main");
app.use("/", mainRoutes);

// Handle the routes

//Homepage: This page will just display the phrase "Hello World!"
app.get("/home", (req, res) => res.send("Welcome to my homepage!"));

// //Welcome page - Extention task: To creat a welcome page that will show the users name on screen (TBC - still trying to figure it out)
// app.get('/welcome/:userId', (req, res) => {res.send('Welcome:' + req.welcome.userId + '!')})

//About page: This page will briefly talk about myself, what I study and where.
app.get('/about', (req, res) => res.send ('<h1>About page</h1>' + '<p> My name is Lubna Maleque and I am a student at Goldsmiths, University of London, studying BSc Creative computing. </p>' ))

//Conatct: This page has all my relevant contact information.
app.get('/contact', (req, res) => res.send ('<h1>CONTACT ME</h1>' + '<p1>Primary email: lmale001@gold.ac.uk</p1>' + '<p2> Secondary email: lubnamaleque15@gmail.com</p2>' + '<p3> Phone number: 07521146040</p3>'))

//Date: This page will display the current date and time in your timezone. Using  HTML and javascript's Date object.
app.get('/date', (req, res) => res.send ('<h1>TODAYS DATE:</h1>' + new Date().toDateString() + '<h2>CURRENT TIME:</h2>' + new Date().toLocaleTimeString() + '<h3> TIMEZONE:</h3>' + Intl.DateTimeFormat().resolvedOptions().timeZone ))

// Start listening for HTTP requests
app.listen(port, 
    () => console.log(`Node server is running on port ${port}...`));
