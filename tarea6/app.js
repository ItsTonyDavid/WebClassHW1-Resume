const path= require('path')
const express = require('express');
const geolocation = require('./geolocationRequest.js');
const weather = require('./weatherRequest.js');

const port = 3000;
const publicDir = path.join(__dirname, 'public');
const app = express();

app.use(express.static(publicDir));

app.get('/', function(req, res){
	res.send('Hola mundo!')
});

app.get('/weather', function(req,res){
  res.setHeader('Acces-Control-Allow-Origin','*');
  if(!req.query.search){
		return res.send({
			error: 'Tienes que dar una peli o serie a buscar'
		})
  }
  geolocation.obtainGeolocation(req.query.search, function(error,response){
  //Si un callback nos regresa error lo imprimimos
  if(error){
    return res.send({
      error: error
    });
	}
  else {
    //Si no hay error cargamos las coordenadas a la variable coordinates
    const coordinates = response;
    //Con las coordenadas obtenidas, pedimos el clima de ese punto
    weather.obtainWeather(coordinates.latitude, coordinates.longitud, function(error,response) {
      //Si un callback no regresa un error lo imprimimos
      if (error) {
        return res.send({
  				error: error
  			});
      }
      else {
        //Si no hay error guardamos la frase que regresa el callback y la mostramos
        return res.send({
          location: req.query.search,
          weather: response
        });
      }
    });
  }
});
});

app.get('*', function(req,res){
	res.send({
		error: 'Esta ruta no existe'
	})
});

app.listen(port, function(){
	console.log('Server Running');
  console.log("working in port " + port);
});
