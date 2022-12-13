const express = require('express');
const app = express();
const port = 3000;
const { db } = require ('./db');

//middleare
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Root endpoint for testing
app.get('/', (req, res) => {
    res.send("The root path GET endpoint works.")
})

//starting a server
app.listen(port, () => {
   db.sync();
   console.log(`Server is listening on http://localhost:${port}`) 
})