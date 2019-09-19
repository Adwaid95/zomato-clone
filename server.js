const express = require('express');
const app = express();
const path =require('path');

app.use('/', express.static(path.join(__dirname, './dist/Foodie')));

app.get('/', (req, res) => {
    console.log(path.join(__dirname, './dist/Foodie/index.html'))
    res.sendFile(path.join(__dirname, './dist/Foodie/index.html'))
});

app.listen('80', () => console.log(`server running at port : 80`));