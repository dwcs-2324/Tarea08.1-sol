function getWeatherUrl(latitud, longitud) {
    let url = OPEN_WEATHER_URL + "&lat=" + latitud + "&lon=" + longitud;
    return encodeURI(url);
}
function getWeather(latitude, longitude, map) {

    var location = new Microsoft.Maps.Location(latitude, longitude);

    let url = getWeatherUrl(latitude, longitude);

   // let url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + YOUR_WEATHER_API_KEY;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            if (data.weather && data.weather[0] && data.weather[0]['icon']) {
                let iconCode = data['weather'][0]['icon'];
                if (iconCode) {
                    iconUrl = "http://openweathermap.org/img/wn/" + iconCode + ".png";
                    var pin = new Microsoft.Maps.Pushpin(location, {
                        icon: iconUrl
                    });

                    let iconDescription = data['weather'][0]['description'];
                    //https://learn.microsoft.com/en-us/bingmaps/v8-web-control/map-control-api/infoboxoptions-object
                    var infobox = new Microsoft.Maps.Infobox(location, {
                        title: 'El tiempo',
                        description: iconDescription,
                        visible: false
                    });


                    Microsoft.Maps.Events.addHandler(pin, 'click', function (e) {
                        infobox.setOptions({
                            location: e.target.getLocation(),
                            visible: true
                        });
                    });

                    map.entities.push(pin);
                    map.entities.push(infobox);



                }
                else {
                    alert("No available data found in OpenWeather");
                }

            }

        })
}