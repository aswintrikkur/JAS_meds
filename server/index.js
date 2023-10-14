const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');
const {userRoute} = require('./routes/userRoute');
const { genericError } = require('./error/errorHandle');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());


connectDB();         //create dataBase


const port = process.env.PORT || 3000;
const server = process.env.SERVER_URL || `http://localhost:${port}`
app.listen(port, () => {
    console.log(`----- server started on  : ${server}`);
})


// -----------routes-------------
app.use('/api/user', userRoute)
// app.use('/api/todo', todoRoute);


app.use(genericError)

app.all('*', (req, res) => {
    res.json(`API does not exist`);
})
