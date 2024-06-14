require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

app.use(express.json());

const userRoutes = require('./server/routes/user');
const postRoutes = require('./server/routes/post');
const groupRoutes = require('./server/routes/group');

mongoose.connect(process.env.DBURL)
    .then(console.log('Connected to MongoDB...'))
    .catch(error => console.log(error));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept, Authorization");
    next();
});

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public', 'index.html')));

app.use('/user', userRoutes);
app.use('/post', postRoutes);
app.use('/group', groupRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));