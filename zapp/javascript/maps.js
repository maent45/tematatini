function initMap() {
    
    var locations = [
         ['Title A', 3.180967,101.715546],
         ['Title B', 3.200848,101.616669],
         ['Title C', 3.147372,101.597443],
         ['Title C', 3.171368,101.653404]
    ];
    
    console.log("original locations", locations);

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: new google.maps.LatLng(3.171368,101.653404),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    
    var marker;
    var i;
    
    for (i = 0; i < locations.length; i++) {  
        marker = new google.maps.Marker({
             position: new google.maps.LatLng(locations[i][1], locations[i][2]),
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