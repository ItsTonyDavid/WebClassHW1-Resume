
const request = require('request');
const credential = require('./credentials.js');


const obtainWeather = function(latitude, longitude, callback){
const url = 'https://api.darksky.net/forecast/' + credential.DARK_SKY_SECRET_KEY + '/' + latitude + ',' + longitude + '/?units=si&lang=es';

  request({ url, json: true}, function(error, response) {

    //Si no estas conectado a internet
    if(error){
      callback('Service unavailable',undefined);
      //El callback regresa 'service unavailable' como error
    }

    //Si mandas una mala loc regresa "error"
    else if (response.body.error != undefined) {
      callback(response.body.error, undefined);
      //El callback regresa la respuesta de la API como error
    }

    //Si la API regresa informacion como "response.body.latitude" significa que si llamamos bien la API
    else if(response.body.latitude != undefined){
        const data = response.body;
        //Creamos un objeto que guarde las variables que nos interesan
        const weather = {
          summary: data.currently.summary,
          temperature: data.currently.temperature,
          precipProbability: data.currently.precipProbability
        };
        callback(undefined, weather.summary + '. Actualmente esta a ' + weather.temperature + '. Hay un ' + weather.precipProbability + '% de posibilidad de lluvia');
        //El callback regresa la frase que queremos como response
      }
      else {
        callback('Invalid APIKey', undefined);
        //El callback regresa "Invalid APIKey" como error
      }
    });
};

module.exports={
    obtainWeather: obtainWeather
};
