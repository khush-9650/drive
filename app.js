const express = require('express');
const app = express();
const userRoute = require('./routes/user.routes')
const dotenv = require('dotenv');
const connectToDB = require('./config/db');
connectToDB();

dotenv.config();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('index');
});

app.use('/user', userRoute);

app.listen(3000, () => {
    console.log(`Server is running at port 3000`);
});