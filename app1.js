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
		if (t.id === "icon-all") {
			raw.push(geoJson[0].features[i])	
		} 
		else if (t.id === "icon-orange" && geoJson[0].features[i].properties.status2 === 'Operational') {
			raw.push(geoJson[0].features[i])	
		}
		else if (t.id === "icon-blue" && geoJson[0].features[i].properties.status2 !== 'Operational') {
			raw.push(geoJson[0].features[i])	
		}
		else if (t.id === "icon-orange-new" && geoJson[0].features[i].properties.status1 === 'Coming online in 2014') {
			raw.push(geoJson[0].features[i])	
		}
		else if (t.id === "icon-orange-tower" && geoJson[0].features[i].properties.technology === 'Tower and heliostat') {
			raw.push(geoJson[0].features[i])	
		}
		else if (t.id === "icon-orange-dish" && geoJson[0].features[i].properties.technology === 'Parabolic Dish') {
			raw.push(geoJson[0].features[i])	
		}
		else if (t.id === "icon-orange-trough" && geoJson[0].features[i].properties.technology !== 'Tower and heliostat' && geoJson[0].features[i].properties.technology !== 'Parabolic Dish') {
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
	  		iconic="/sites/prod/files/blue_tower.png"
	  	} else if (raw[i].properties.technology == "Parabolic Dish") {
	  		iconic="/sites/prod/files/blue_dish.png"
	  	} else {
	  		iconic="/sites/prod/files/blue_trough.png"
	  	};

        var popupContent =  '<div class=\'popHeader\'><h2>' + raw[i].properties.name + '</h2></div>' +
        '<p><i>in ' + raw[i].properties.city + ', ' + raw[i].properties.state + '</i></p>' +
        '<p>Plant: ' + raw[i].properties.technology  + '</p>' +
        '<p>Status: ' + raw[i].properties.status1  + '</p>' +
        '<p>Capacity: ' + raw[i].properties.size + ' MW' +'</p></div>';
	  } else{
	  	if (raw[i].properties.technology == "Tower and heliostat") {
	  		iconic="/sites/prod/files/orange_tower.png"
	  	} else if (raw[i].properties.technology == "Parabolic Dish") {
	  		iconic="/sites/prod/files/orange_dish.png"
	  	} else {
		  	iconic="/sites/prod/files/orange_trough.png"	
	  	};

        var popupContent =  '<div class=\'popHeader\'><h2>' + raw[i].properties.name + '</h2></div>' +
        '<p><i>in ' + raw[i].properties.city + ', ' + raw[i].properties.state + '</i></p>' +
        '<p>Plant: ' + raw[i].properties.technology  + '</p>' +
        '<p>Capacity: ' + raw[i].properties.size + ' MW' +'</p></div>';
	  };

	  // iconic = "//api.tiles.mapbox.com/v3/marker/pin-m-"+ "circle" +"+ff6600.png"71bc4e
	  // /sites/prod/files/ten.png

	  // Create custom popup content



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


		$('.icon').click(function (e) {
	      $('.icon').removeClass('active');
	      $(this).addClass('active');
			removal();
			t = this;
			buildMap();
		});
	});

}(jQuery));