const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const https = require('https');
//const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

let city = 'Nur-Sultan';

app.get('/', function(req, res){
    const url = "https://api.openweathermap.org/data/2.5/weather?appid=07e6be11058f287f345016199616cd77&q=" + city +"&units=metric";
    https.get(url, function(response) {
        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            res.setHeader('Content-Type', 'text/html');
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = today.getMonth() + 1;
            let month = '';
            switch (mm) {
                case 1: month = 'JAN'; break;
                case 2: month = 'FEB'; break;
                case 3: month = 'MAR'; break;
                case 4: month = 'APR'; break;
                case 5: month = 'MAY'; break;
                case 6: month = 'JUN'; break;
                case 7: month = 'JUL'; break;
                case 8: month = 'AUG'; break;
                case 9: month = 'SEP'; break;
                case 10: month = 'OCT'; break;
                case 11: month = 'NOV'; break;
                case 12: month = 'DEC';
            }
            today = dd + " " + month;
            res.render('index', {description: weatherData.weather[0].main, temperature: Math.round(weatherData.main.temp), city: city, date: today});
        })
    })
})

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/assets/style.css');
})



/*
mongoose.connect("mongodb://localhost:27017/newsdb", {useNewUrlParser: true,useUnifiedTopology: true});

const newsSchema = new mongoose.Schema({
    title: String,
    date: Date,
    category: String,
    topic: String,
    description: String
});

const News = new mongoose.model("News", newsSchema);
*/

app.listen( 27017, function() {
    console.log("http://localhost:21017")
})


