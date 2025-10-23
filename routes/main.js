// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes

//Homepage: This page will just display the phrase "Hello World!"
router.get("/", (req, res) => res.send("<h1> Hello World! </h1>")); 

//About page: This page will briefly talk about myself, what I study and where.
router.get("/about", (req, res) => res.send ('<h1>About page</h1>' + '<p> My name is Lubna Maleque and I am a student at Goldsmiths, University of London, studying BSc Creative computing. </p>'));

//Conatct: This page has all my relevant contact information.
router.get('/contact', (req, res) => res.send ('<h1>CONTACT ME</h1>' + '<p1>Primary email: lmale001@gold.ac.uk</p1>' + '<p2> Secondary email: lubnamaleque15@gmail.com</p2>' + '<p3> Phone number: 07521146040</p3>'))

//Date: This page will display the current date and time in your timezone. Using  HTML and javascript's Date object.
router.get('/date', (req, res) => res.send ('<h1>TODAYS DATE:</h1>' + new Date().toDateString() + '<h2>CURRENT TIME:</h2>' + new Date().toLocaleTimeString() + '<h3> TIMEZONE:</h3>' + Intl.DateTimeFormat().resolvedOptions().timeZone ))

//welcome page
router.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
})



// Export the router object so index.js can access it
module.exports = router;
