const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const studentRouter = require('./routes/student');
const courseRouter = require('./routes/course');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(studentRouter);
app.use(courseRouter);

app.listen('3000', () => {
    console.log('Listening to port 3000..');
});
