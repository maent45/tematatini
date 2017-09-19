var mapLocations = [];

function loadMapLocations() {
    
    $(".map-locations-child").each(function() {
        var title = $(this).find('.title').text();
        var lat = parseFloat($(this).find('.lat').text());
        var long = parseFloat($(this).find('.long').text());
        var address = $(this).find('.address').text();
        var cultural_sig = $(this).find('.cultural-sig').text();
        
        mapLocations.push([title, lat, long, address, cultural_sig]);
    });
    
    console.log('mapLocation',mapLocations);
    
}

loadMapLocations();

var defCenterLat = $(".map-def-center-coords__lat").text();
var defCenterLong = $(".map-def-center-coords__long").text();

function initMap() {
    
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: new google.maps.LatLng(defCenterLat,defCenterLong),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    
    var marker;
    var i;
    var infowindow = new google.maps.InfoWindow();
    
    for (i = 0; i < mapLocations.length; i++) {
        
        marker = new google.maps.Marker({
             position: new google.maps.LatLng(mapLocations[i][1], mapLocations[i][2]),
             map: map,
             title: 'Title'
        });
        
        // show marker title on click
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent('<div><h2>'+mapLocations[i][0]+'</h2><b>'+mapLocations[i][3]+'</b><p>'+mapLocations[i][4]+'</p></div>');
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
    
}