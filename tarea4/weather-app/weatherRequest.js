
const request = require('request');
const credential = require('./credentials.js');


const obtainWeather = function(latitude,longitude){
const url = 'https://api.darksky.net/forecast/' + credential.DARK_SKY_SECRET_KEY + '/' + latitude + ',' + longitude + '/?units=si&lang=es';

  request({ url, json: true}, function(error, response) {
        const data = response.body
        const weather = {
          summary: data.currently.summary,
          temperature: data.currently.temperature,
          precipProbability: data.currently.precipProbability
        };
        console.log(weather.summary + '. Actualmente esta a ' + weather.temperature + '. Hay un ' + weather.precipProbability + '% de posibilidad de lluvia');
        //console.log(weather.temperature);
        //console.log(weather.precipProbability);
    });
};

module.exports={
    obtainWeather: obtainWeather
};
