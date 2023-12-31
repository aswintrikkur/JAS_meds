const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');
const { userRoute } = require('./routes/userRoute');
const { customerRoute } = require('./routes/customerRoute');
const { genericError } = require('./error/errorHandle');
const { historyRouter } = require('./routes/historyRoute');
const { checkAuth } = require('./middlewares/checkAuth');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

//! delete customers list from users collections

connectDB();         //create dataBase

const port = process.env.PORT || 3000;
const server = process.env.SERVER_URL || `http://localhost:${port}`

app.listen(port, () => {
    console.log(`===== server started on  : ${server}`);
})





// -----------routes-------------
app.use('/api/user', userRoute)
app.use('/api/customer',checkAuth, customerRoute);
app.use('/api/history',checkAuth, historyRouter)


//------ error handling -------
app.use(genericError)

app.all('*', (req, res) => {
    res.json(`API does not exist`);
})
