const geolocation = require('./geolocationRequest.js');
const weather = require('./weatherRequest.js');
const place = 'Monterrey';

//Mandamos llamar la API de mapa para obtener coordenadas
geolocation.obtainGeolocation(place, function(error,response){
  //Si un callback nos regresa error lo imprimimos
  if(error){
		console.log(error);
	}
  else {
    //Si no hay error cargamos las coordenadas a la variable coordinates
    const coordinates = response;
    //Con las coordenadas obtenidas, pedimos el clima de ese punto
    weather.obtainWeather(coordinates.latitude, coordinates.longitud, function(error,response) {
      //Si un callback no regresa un error lo imprimimos
      if (error) {
        console.log(error);
      }
      else {
        //Si no hay error guardamos la frase que regresa el callback y la mostramos
        const weatherPhrase = response
        console.log(weatherPhrase);
      }
    });
  }
});

/*
omdb.omdbMovie(title, function(error, response){
	if(error){
		console.log(error)
	}
	else{
		console.log(response)
		omdb.omdbSeason(response.title, response.seasons, function(error, response){
			if(error){
				console.log(error)
			}
			else{
				console.log('La temporada' + response.season + 'tiene ' + response.episodes.length + ' episodios')
				for(i in response.episodes ){
					console.log(i)
					console.log(' - ' + response.episodes[i])
				}
			}
		})
	}
})

*/
