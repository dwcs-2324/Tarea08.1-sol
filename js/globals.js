
//BING MAPS
const YOUR_BING_MAPS_API_KEY = '';
const BING_BASE_LOCATIONS_URL = "http://dev.virtualearth.net/REST/v1/Locations?query={locationQuery}&maxResults=1&key="+YOUR_BING_MAPS_API_KEY;
      

const RELACION_ESCALA_ZOOM = 156543.03392
const RADIO = 10; //km
const EXPAND_FACTOR = 8;

//WEATHER
const YOUR_WEATHER_API_KEY = '';
const OPEN_WEATHER_URL = "http://api.openweathermap.org/data/2.5/weather?appid=" + YOUR_WEATHER_API_KEY+"&lang=es";


  // Creamos script dinámicamente para poder añadir la clave de bing maps
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'http://www.bing.com/api/maps/mapcontrol?key=' + YOUR_BING_MAPS_API_KEY;

  // Añadimos antes de cerrar el body
  document.body.appendChild(script);