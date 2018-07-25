function mapaLoc() {
    // mapa con geolocalización
    // ejemplo básico del uso del nuevo API de HTML5

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (pos) {
            let domMapa = document.getElementById("miMapa");
            let latitude = pos.coords.latitude;
            let longitude = pos.coords.longitude;
            let options = {
                position: new google.maps.LatLng(latitude, longitude),
                title: "Tu localización",
                zoom: 19,
                mapTypeId:google.maps.MapTypeId.ROADMAP
            }; // fin de options
            console.log('Hola')
            var map = new google.maps.Map(domMapa, options);
            var marker = new google.maps.Marker(options);
            var circle = new google.maps.Circle({
                map: map, radius: pos.coords.accuracy
            }); // fin de circle
            circle.bindTo('center', marker, 'position');
            marker.setMap(map);
            map.setCenter(new google.maps.LatLng(latitude, longitude));
        },
        function (error) {
            console.log(error.message);
        },
        {enableHighAccuracy : true}); // fin de getCurrentPosition
    }
}

document.addEventListener('DOMContentLoaded', mapaLoc)

