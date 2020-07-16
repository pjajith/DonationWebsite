const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('src'));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(process.env.PORT, () => {
    console.log('Server Up');
});
