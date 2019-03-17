//En app.js necesitaran el modulo 'request' para realizar una request, vean la documentación para cualquier duda.
const geolocation = require('./geolocationRequest.js')
const place = 'Monterrey Nuevo Leon'
geolocation.obtainGeolocation(place)
