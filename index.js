const express = require('express');
const mongoose = require('mongoose');
const cors =require( 'cors');
const app = express();
const PORT = 8080;
const MONGODB_URL = 'mongodb+srv://xfinity:12345@delta.mcoyl.mongodb.net/todo';
const taskRouter = require('./routes/tasks.js');

mongoose.connect(MONGODB_URL);
mongoose.connection.once('open',()=>{
    console.log('Connected to database');
    app.listen(PORT,() => {
        console.log('listening on port @' + PORT)});
})
app.use(cors());
app.use(express.json());
app.use('/tasks',taskRouter)
app.get('/', (req, res) => {
    res.send("Hello World!");
})





