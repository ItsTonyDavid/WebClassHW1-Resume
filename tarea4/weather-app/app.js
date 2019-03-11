//En app.js necesitaran el modulo 'request' para realizar una request, vean la documentación para cualquier duda.
const geolocation = require('./geolocationRequest.js')

//Obtenemos cordenadas X y Y
var cordenadaX = 0, cordenadaY = 0;
//Ya que la funcion regresa un arreglo de cordenadas (la X y Y) hice un arreglo auxiliar
const place = 'Monterrey Nuevo Leon'
geolocation.obtainGeolocation(place)
