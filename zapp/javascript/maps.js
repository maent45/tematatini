var mapLocations = [];

function loadMapLocations() {
    
    $(".map-locations-child").each(function() {
        var title = $(this).find('.title').text();
        var vid_url = $(this).find('.vid-url').text();
        var lat = parseFloat($(this).find('.lat').text());
        var long = parseFloat($(this).find('.long').text());
        var address = $(this).find('.address').text();
        var cultural_sig = $(this).find('.cultural-sig').text();
        
        mapLocations.push([
            title, 
            vid_url, 
            lat, 
            long, 
            address, 
            cultural_sig
        ]);
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
             position: new google.maps.LatLng(mapLocations[i][2], mapLocations[i][3]),
             map: map
        });
        
        // show marker title on click
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                // TODO: refactor infowindow setContent
                infowindow.setContent('<div><h2>'+mapLocations[i][0]+'</h2><b>'+mapLocations[i][4]+'</b><div><iframe width="420" height="345" src="'+mapLocations[i][1]+'"></iframe></div><p>'+mapLocations[i][5]+'</p></div>');
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
    
}