var mapLocations = [];

function loadMapLocations() {
    
    $(".map-locations-child").each(function() {
        var title = $(this).find('.title').text();
        var lat = parseFloat($(this).find('.lat').text());
        var long = parseFloat($(this).find('.long').text());
        
        mapLocations.push([title, lat, long]);
    });
    
    console.log('mapLocation',mapLocations);
    
}

loadMapLocations();

function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: new google.maps.LatLng(3.171368,101.653404),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    
    var marker;
    var i;
    
    for (i = 0; i < mapLocations.length; i++) {  
        marker = new google.maps.Marker({
             position: new google.maps.LatLng(mapLocations[i][1], mapLocations[i][2]),
             map: map
        });
    
        // google.maps.event.addListener(marker, 'click', (function(marker, i) {
        //      return function() {
        //          infowindow.setContent(locations[i][0]);
        //          infowindow.open(map, marker);
        //      }
        // })(marker, i));
    }
    
}