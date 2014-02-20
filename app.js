/*create array:*/
var marker = new Array();

//Create empty variable to store "this" DOM element in
var t;

function buildMap() {

//create empty array to push into
	var raw = [];
//create array of numbers (in push below) where you attach the numbers to generate the icons
	var iconname = [];
//create array of values
	var iconvalue = [];
	var o;
if (t != undefined) {
//for each point, push if it is the right type and if that has been clicked
	for (var i = 0; i < geoJson[0].features.length; i++) {
		if (t.id === "b1") {
			raw.push(geoJson[0].features[i])	
		} 
		else if (t.id === "b2" && geoJson[0].features[i].properties.status2 === 'Operational') {
			raw.push(geoJson[0].features[i])	
		}
		else if (t.id === "b3" && geoJson[0].features[i].properties.status2 !== 'Operational') {
			raw.push(geoJson[0].features[i])	
		};
	};
} else {
	for (var i = 0; i < geoJson[0].features.length; i++) {
		//for the first load, load the first set of information		
			raw.push(geoJson[0].features[i])	
	};
};
     

    var oms = new OverlappingMarkerSpiderfier(map);

	for (var i = 0; i < raw.length; i++) {
	 //create a the "iconic" url for the icon, from the mapbox api.
	  var iconic;

	  if (raw[i].properties.status2 != 'Operational') {
	  	if (raw[i].properties.technology == "Tower and heliostat") {
	  		iconic="IMAGES/tower_blue_small.png"
	  	} else if (raw[i].properties.technology == "Parabolic trough") {
	  		iconic="IMAGES/trough_blue_small.png"
	  	} else {
	  		iconic="IMAGES/dish_blue_small.png"
	  	};
	  } else{
	  	if (raw[i].properties.technology == "Tower and heliostat") {
	  		iconic="IMAGES/tower_orange_small.png"
	  	} else if (raw[i].properties.technology == "Parabolic trough") {
	  		iconic="IMAGES/trough_orange_small.png"
	  	} else {
	  		iconic="IMAGES/dish_orange_small.png"
	  	};

	  };

	  // iconic = "//api.tiles.mapbox.com/v3/marker/pin-m-"+ "circle" +"+ff6600.png"71bc4e
	  // /sites/prod/files/ten.png

	  // Create custom popup content
        var popupContent =  '<div class=\'popHeader\'><h2>' + raw[i].properties.name + '</h2></div>' +
        '<p>' + raw[i].properties.city + ', ' + raw[i].properties.state + '</p>' +
        '<p>' + raw[i].properties.technology  + '</p>' +
        '<p>' + raw[i].properties.size + 'MW' +'</p></div>'; 

	  /*pushing items into array each by each and then add markers*/
	  var LamMarker = new L.marker([raw[i].geometry.coordinates[1],raw[i].geometry.coordinates[0]], {
	    icon: L.icon({
	        iconUrl: iconic,
	        iconSize:     [35, 32], // size of the icon
	        iconAnchor:   [15, 35], // point of the icon which will correspond to marker's location
	        popupAnchor:  [0, -35]  // point from which the popup should open relative to the iconAnchor
		    })
		}).bindPopup(popupContent, {closeButton:false });
		  marker.push(LamMarker);
		  map.addLayer(marker[i]);
		          oms.addMarker(marker[i]);

	};
};

function removal() {
	for (var i = 0; i < marker.length; i++) {
    	map.removeLayer(marker[i]);
	};
	marker = [];
};

(function ($) {

	$(document).ready(function() { 
			buildMap();				


		$('.button').click(function (e) {
	      $('.button').removeClass('active');
	      $(this).addClass('active');
			removal();
			t = this;
			buildMap();
		});

	//turn on off pull tab
$('a#tably').click(function (e) {
       e.preventDefault();
       $('a#tably').removeClass('active');
       $('.about-data').addClass('active');
       $('a.closed').addClass('active');
   });

$('a.closed').click(function (e) {
       e.preventDefault();
       $('.about-data').removeClass('active');
       $('a.closed').removeClass('active');
       $('a#tably').addClass('active');
   });       
	});

}(jQuery));