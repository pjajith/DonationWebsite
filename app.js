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

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/contribution', (req, res) => {
    res.render('postcontribution');
});

app.get('/donate', (req, res) => {
    res.render('postdonate');
});

app.get('/faq', (req, res) => {
    res.render('faq');
});

app.get('/gallery', (req, res) => {
    res.render('postgallery');
});

app.listen(process.env.PORT, () => {
    console.log('Server Up');
});
