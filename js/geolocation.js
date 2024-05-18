window.onload = onceLoaded;
function onceLoaded() {

    document.getElementById('formDireccion').onsubmit = getCoordinates;
}

function getCoordinates(event) {
    event.preventDefault();
    

    let direccion = document.getElementById('direccion').value;

    direccion = encodeURI(direccion);
    let url = BING_BASE_LOCATIONS_URL.replace("{locationQuery}", direccion);

    fetch(url)
        .then(response => response.json())
        .then(data => {
          //  console.log(data);

            //https://learn.microsoft.com/en-us/bingmaps/rest-services/common-parameters-and-types/location-and-area-types

          
            if (data.resourceSets[0].resources[0].point.coordinates) {
                let latitud = data.resourceSets[0].resources[0].point.coordinates[0];
                let longitud = data.resourceSets[0].resources[0].point.coordinates[1];

                console.log('lat: ' + latitud);
                console.log('longitud: ' + longitud);

                

                initMap(latitud, longitud);
            }
            else {
                alert('No se han encontrado resultados');
            }

        }

        )
        .catch(error => {
            alert('Ha ocurrido un error y no se pueden obtener los datos');
            console.log(error);
        })

}



