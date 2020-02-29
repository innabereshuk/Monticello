     
     let map, marker, infoWindow;

     function initMap() {

        
    let mapCenter = {lat:  40.685553, lng: -73.891121};
        map = new google.maps.Map(document.getElementById('map'), {
        center: mapCenter,
        zoom: 11,
        mapTypeId: 'roadmap'
        });

        marker =  new google.maps.Marker({ 
            position: mapCenter,
            map: map,
            icon: {
                url: 'image/pin.png',
                scaledSize: new google.maps.Size(64, 64)
            },
            title: 'MONTICELLO',
            animation: google.maps.Animation.BOUNCE
         });


         let contentString = '<div id="content">'+
         '<div id="siteNotice">'+'<h3>Moticello</h3>'+
         '</div>'+ '<div id="bodyContent">'+
         '<p>Address: 91 Nolan Road, South Glens Falls, NY, USA</p>' +
         '<p>Email:gahuy93@gmail.com</p>'+
         '<p><span>Веб-сайт:</span> <a href="#" target="_blank">monticello.com</a>'+
         '</p>'+
         '</div>'+
         '</div>';
    
        infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
         });

         marker.addListener('click', function() {
            infowindow.open(map, marker);
            marker.setAnimation(null);
        });

        google.maps.event.addListener(infowindow,'closeclick',function(){
            marker.setAnimation(google.maps.Animation.BOUNCE);
        });
        
        
        $.getJSON("map-styles.json", function(data) {
            map.setOptions({styles: data});
        });
    }
        
        

        

        



   