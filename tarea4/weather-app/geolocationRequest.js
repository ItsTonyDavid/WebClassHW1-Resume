const request = require('request');
const credential = require('./credentials.js');
const weather = require('./weatherRequest.js')

const obtainGeolocation = function(place){
const url  = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ place + '.json?access_token=' + credential.MAPBOX_TOKEN;

  request({ url, json: true}, function(error, response) {
        const data = response.body
        const map = {
          latitude: data.features[0].center[1],
          longitud: data.features[0].center[0]
        };
        console.log('latitude = ' + map.latitude);
        console.log('longitud = ' + map.longitud);
        weather.obtainWeather(map.latitude, map.longitud);
    });

};

module.exports={
    obtainGeolocation: obtainGeolocation
};
