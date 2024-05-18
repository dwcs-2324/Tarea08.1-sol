function initMap(latitude, longitude) {
    var map = new Microsoft.Maps.Map(document.getElementById('map'), {
        credentials: YOUR_BING_MAPS_API_KEY
    });


    //get Weather for the initial location
    getWeather(latitude, longitude, map);
    var center = new Microsoft.Maps.Location(latitude, longitude);

    var mapElement = document.getElementById('map');
    var mapWidth = mapElement.clientWidth;
    var mapHeight = mapElement.clientHeight;

    let customZoom = calculateZoomLevel(mapWidth, mapHeight);
    map.setView({ center: center, zoom: customZoom });
}


function calculateZoomLevel(widthInPixels, heightInPixels) {


    // Convert  kilometers to meters
    var distanceMeters = RADIO * 1000 * 8; //valor 8 experimental para establecer el zoom

    // Calculate the scale of the map based on the smaller dimension
    var scale = Math.min(
        distanceMeters / widthInPixels,
        distanceMeters / heightInPixels
    );

    // Calculate the zoom level based on the scale
    var zoomLevel = Math.log2(RELACION_ESCALA_ZOOM / scale);

    // Round the zoom level to the nearest integer
    return Math.round(zoomLevel);
}


