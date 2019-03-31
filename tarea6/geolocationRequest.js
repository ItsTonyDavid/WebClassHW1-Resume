const request = require('request');
const credential = require('./credentials.js');
//const weather = require('./weatherRequest.js')

//Llamamos la API con los parametros que queremos
//callback en realidad es una funcion (porque asi lo definimos en el app.js) con 2 paremetros (error y response))
const obtainGeolocation = function(place, callback){
  const url  = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ place + '.json?access_token=' + credential.MAPBOX_TOKEN;
  request({ url: url, json: true}, function(error, response) {

    //Si no tenemos coneccion a internet
    if(error){
      callback('Service unavailable', undefined);
      //El callback regresa 'service unavailable' como error y undefined como response
      //undefined podemos verlo como algo parecido a false, o null
    }

    //Cuando APIKey esta mal nos manda un Message
    else if (!(response.body.message == undefined)) {
      callback('Invalid APIKey', undefined)
      //El callback regresa 'Invalid APIKey' como error y undefined como response
    }

    //Cuando le mandamos una mala ciudad, nos resgresa features : []
    else if (response.body.features.length == 0) {
      callback('Name city error', undefined);
      //El callback regresa 'Name city error ' como error y undefined como response
    }

    //Si todo esta bien y cool :)
    else{
        const data = response.body
        const map = {
          latitude: data.features[0].center[1],
          longitud: data.features[0].center[0]
        };
        callback(undefined, map);
        //weather.obtainWeather(map.latitude, map.longitud);
        ////El callback regresa undefined como error y un objeto con las coordenadas como response
      }
    });
};

module.exports={
    obtainGeolocation: obtainGeolocation
};
