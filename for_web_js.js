var map = L.map('map',
{
      zoomControl: false
})
    .setView([37.908, -111.525], 5)
    .addLayer(L.mapbox.tileLayer('energy.h86pj7gh',{
      detectRetina: true
    }));

    map.scrollWheelZoom.disable();
    // map.dragging.disable();


    // map.addControl( L.control.zoom({position: 'topright'}) )
    map.addControl( L.control.zoom({position: 'bottomright'}) )


var geoJson = [
{
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -117.189029,
                    34.938985
                ]
            },
            "properties": {
                "geoid": "1",
                "id": "20447",
                "name": "Abengoa Mojave ",
                "size": "250",
                "sqrtsize": "15.8113883",
                "city": "Hinkley",
                "state": "California",
                "owner": "Abengoa Solar Espana SA",
                "opdate": "12/31/14",
                "developer": "Abengoa Solar Espana SA",
                "status1": "Coming online in 2014",
                "utility": "Pacific Gas & Electric Co",
                "technology": "Parabolic trough",
                "status2": "Financing secured/under construction",
                "isNew": "Yes"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -112.72,
                    32.95
                ]
            },
            "properties": {
                "geoid": "2",
                "id": "11275",
                "name": "Abengoa Solana ",
                "size": "280",
                "sqrtsize": "16.73320053",
                "city": "Gila Bend",
                "state": "Arizona",
                "owner": "Abengoa SA",
                "opdate": "12/31/13",
                "developer": "Abengoa SA",
                "status1": "Coming online in 2014",
                "utility": "Arizona Public Service Co",
                "technology": "Parabolic trough",
                "status2": "Financing secured/under construction",
                "isNew": "Yes"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -111.327269,
                    32.573685
                ]
            },
            "properties": {
                "geoid": "3",
                "id": "1066",
                "name": "APS Saguaro ",
                "size": "1",
                "sqrtsize": "1",
                "city": "Red Rock",
                "state": "Arizona",
                "owner": "Arizona Public Service Co",
                "opdate": "4/6/06",
                "developer": "Arizona Public Service Co",
                "status1": "Commissioned",
                "utility": "",
                "technology": "Tower and heliostat",
                "status2": "Operational",
                "isNew": "No"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -119.018863,
                    35.36697
                ]
            },
            "properties": {
                "geoid": "4",
                "id": "14650",
                "name": "Ausra Kimberlina ",
                "size": "5",
                "sqrtsize": "2.236067977",
                "city": "Bakersfield",
                "state": "California",
                "owner": "Areva Solar Inc",
                "opdate": "10/23/08",
                "developer": "Areva Solar Inc",
                "status1": "Commissioned",
                "utility": "",
                "technology": "Fresnel",
                "status2": "Operational",
                "isNew": "No"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -120.386,
                    36.175
                ]
            },
            "properties": {
                "geoid": "5",
                "id": "35237",
                "name": "BrightSource Coalinga ",
                "size": "29",
                "sqrtsize": "5.385164807",
                "city": "Coalinga",
                "state": "California",
                "owner": "Chevron Technology Ventures Corp",
                "opdate": "10/3/11",
                "developer": "BrightSource Energy Inc",
                "status1": "Commissioned",
                "utility": "",
                "technology": "Tower and heliostat",
                "status2": "Operational",
                "isNew": "No"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -115.469,
                    35.557
                ]
            },
            "properties": {
                "geoid": "6",
                "id": "20429",
                "name": "BrightSource Ivanpah ",
                "size": "392",
                "sqrtsize": "19.79898987",
                "city": "Ivanpah",
                "state": "California",
                "owner": "Bechtel Group Inc ; NRG Energy Inc ; BrightSource Energy Inc",
                "opdate": "6/30/13",
                "developer": "BrightSource Energy Inc",
                "status1": "Coming online in 2014",
                "utility": "Pacific Gas & Electric Co ; Southern California Edison Co",
                "technology": "Tower and heliostat",
                "status2": "Operational",
                "isNew": "Yes"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -115.2,
                    33.75
                ]
            },
            "properties": {
                "geoid": "7",
                "id": "1",
                "name": "BrightSource Palen",
                "size": "500",
                "sqrtsize": "22.36067977",
                "city": "Riverside County",
                "state": "California",
                "owner": "BrightSource Energy Inc",
                "opdate": "",
                "developer": "BrightSource Energy Inc",
                "status1": "Announced/planning begun",
                "utility": "PG&E Corp",
                "technology": "Tower and heliostat",
                "status2": "Announced/planning begun",
                "isNew": "No"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -118.144779,
                    34.698905
                ]
            },
            "properties": {
                "geoid": "8",
                "id": "19430",
                "name": "eSolar Sierra ",
                "size": "5",
                "sqrtsize": "2.236067977",
                "city": "Lancaster",
                "state": "California",
                "owner": "eSolar Inc",
                "opdate": "8/5/09",
                "developer": "eSolar Inc",
                "status1": "Commissioned",
                "utility": "Southern California Edison Co",
                "technology": "Tower and heliostat",
                "status2": "Operational",
                "isNew": "No"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -80.482944,
                    27.110165
                ]
            },
            "properties": {
                "geoid": "9",
                "id": "13266",
                "name": "FPL Martin Next Generation Solar Energy Center ",
                "size": "75",
                "sqrtsize": "8.660254038",
                "city": "Martin",
                "state": "Florida",
                "owner": "Florida Power & Light Co",
                "opdate": "3/5/11",
                "developer": "Florida Power & Light Co",
                "status1": "Commissioned",
                "utility": "Florida Power & Light Co",
                "technology": "Parabolic trough",
                "status2": "Operational",
                "isNew": "No"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -115.06,
                    33.61
                ]
            },
            "properties": {
                "geoid": "10",
                "id": "20584",
                "name": "Genesis Solar Blythe ",
                "size": "250",
                "sqrtsize": "15.8113883",
                "city": "Blythe",
                "state": "California",
                "owner": "Genesis Solar LLC",
                "opdate": "6/30/13",
                "developer": "NextEra Energy Resources LLC",
                "status1": "Coming online in 2014",
                "utility": "Pacific Gas & Electric Co ; Southern California Edison Co",
                "technology": "Parabolic trough",
                "status2": "Financing secured/under construction",
                "isNew": "Yes"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -112.298514,
                    40.53113
                ]
            },
            "properties": {
                "geoid": "11",
                "id": "57764",
                "name": "Infinia Tooele Army Depot ",
                "size": "1.5",
                "sqrtsize": "1.224744871",
                "city": "Tooele",
                "state": "Utah",
                "owner": "United States Army",
                "opdate": "",
                "developer": "Infinia Corp",
                "status1": "Financing secured/under construction",
                "utility": "",
                "technology": "Parabolic Dish",
                "status2": "Financing secured/under construction",
                "isNew": "No"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -114.834044,
                    35.978615
                ]
            },
            "properties": {
                "geoid": "12",
                "id": "1331",
                "name": "Nevada Solar One ",
                "size": "64",
                "sqrtsize": "8",
                "city": "Boulder City",
                "state": "Nevada",
                "owner": "Acciona SA",
                "opdate": "6/7/07",
                "developer": "Solargenix Energy LLC",
                "status1": "Commissioned",
                "utility": "NV Energy Inc ; Sierra Pacific Power Co",
                "technology": "Parabolic trough",
                "status2": "Operational",
                "isNew": "No"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -116.888915,
                    34.859185
                ]
            },
            "properties": {
                "geoid": "13",
                "id": "4972",
                "name": "Solar Energy Generating Systems I-II",
                "size": "43.8",
                "sqrtsize": "6.618156843",
                "city": "Daggett",
                "state": "California",
                "owner": "Sunray Energy Inc",
                "opdate": "12/31/85",
                "developer": "Luz International Ltd",
                "status1": "Commissioned",
                "utility": "Southern California Edison Co",
                "technology": "Parabolic trough",
                "status2": "Operational",
                "isNew": "No"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -117.541443,
                    34.991909
                ]
            },
            "properties": {
                "geoid": "14",
                "id": "439",
                "name": "Solar Energy Generating Systems III-VII",
                "size": "150",
                "sqrtsize": "12.24744871",
                "city": "Kramer Junction",
                "state": "California",
                "owner": "NextEra Energy Resources LLC ; Fortress Investment Group LLC",
                "opdate": "1/1/87",
                "developer": "KJC Operating Co ; Luz International Ltd",
                "status1": "Commissioned",
                "utility": "",
                "technology": "Parabolic trough",
                "status2": "Operational",
                "isNew": "No"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -122.71693,
                    39.124725
                ]
            },
            "properties": {
                "geoid": "15",
                "id": "2420",
                "name": "Solar Energy Generating Systems VIII-IX ",
                "size": "160",
                "sqrtsize": "12.64911064",
                "city": "Harper Lake",
                "state": "California",
                "owner": "ArcLight Capital Partners LLC ; NextEra Energy Resources LLC ; Caithness Energy LLC",
                "opdate": "1/1/91",
                "developer": "Luz International Ltd",
                "status1": "Commissioned",
                "utility": "Southern California Edison Co",
                "technology": "Parabolic trough",
                "status2": "Operational",
                "isNew": "No"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -117.231934,
                    38.065495
                ]
            },
            "properties": {
                "geoid": "16",
                "id": "23213",
                "name": "SolarReserve Crescent Dunes ",
                "size": "110",
                "sqrtsize": "10.48808848",
                "city": "Tonopah",
                "state": "Nevada",
                "owner": "Banco Santander SA ; SolarReserve Inc ; Grupo Cobra",
                "opdate": "12/31/13",
                "developer": "SolarReserve Inc",
                "status1": "Coming online in 2014",
                "utility": "NV Energy Inc",
                "technology": "Tower and heliostat",
                "status2": "Financing secured/under construction",
                "isNew": "Yes"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -112.717224,
                    32.947265
                ]
            },
            "properties": {
                "geoid": "17",
                "id": "28558",
                "name": "SolarReserve Crossroads ",
                "size": "150",
                "sqrtsize": "12.24744871",
                "city": "Gila Bend",
                "state": "Arizona",
                "owner": "SolarReserve Inc",
                "opdate": "",
                "developer": "SolarReserve Inc",
                "status1": "Announced/planning begun",
                "utility": "",
                "technology": "Tower and heliostat",
                "status2": "Announced/planning begun",
                "isNew": "No"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -114.217079,
                    33.6762
                ]
            },
            "properties": {
                "geoid": "18",
                "id": "24243",
                "name": "SolarReserve Quartzsite ",
                "size": "100",
                "sqrtsize": "10",
                "city": "Quartzsite",
                "state": "Arizona",
                "owner": "SolarReserve Inc",
                "opdate": "",
                "developer": "SolarReserve Inc",
                "status1": "Announced/planning begun",
                "utility": "",
                "technology": "Tower and heliostat",
                "status2": "Announced/planning begun",
                "isNew": "No"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -114.813263,
                    34.079601
                ]
            },
            "properties": {
                "geoid": "19",
                "id": "21735",
                "name": "SolarReserve Rice ",
                "size": "150",
                "sqrtsize": "12.24744871",
                "city": "Rice",
                "state": "California",
                "owner": "SolarReserve Inc",
                "opdate": "",
                "developer": "SolarReserve Inc",
                "status1": "Announced/planning begun",
                "utility": "Pacific Gas & Electric Co",
                "technology": "Tower and heliostat",
                "status2": "Announced/planning begun",
                "isNew": "No"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -155.995682,
                    19.640135
                ]
            },
            "properties": {
                "geoid": "20",
                "id": "6839",
                "name": "Sopogy Holaniku Kailua-Kona STEG Project",
                "size": "2",
                "sqrtsize": "1.44",
                "city": "Kailua-Kona",
                "state": "Hawaii",
                "owner": "Sopogy Inc",
                "opdate": "12/10/09",
                "developer": "Sopogy Inc",
                "status1": "Commissioned",
                "utility": "",
                "technology": "Parabolic trough",
                "status2": "Operational",
                "isNew": "No"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -112.075774,
                    33.44826
                ]
            },
            "properties": {
                "geoid": "21",
                "id": "29385",
                "name": "Southwest Solar Phoenix ",
                "size": "1",
                "sqrtsize": "1",
                "city": "Phoenix",
                "state": "Arizona",
                "owner": "Southwest Solar Technologies Inc",
                "opdate": "2/15/11",
                "developer": "Southwest Solar Technologies Inc",
                "status1": "Commissioned",
                "utility": "",
                "technology": "Parabolic Dish",
                "status2": "Operational",
                "isNew": "No"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -119.437934,
                    35.108956
                ]
            },
            "properties": {
                "geoid": "22",
                "id": "999",
                "name": "Berry Petroleum EOR plant",
                "size": "7",
                "sqrtsize": "",
                "city": "Kern County",
                "state": "California",
                "owner": "",
                "opdate": "US",
                "developer": "",
                "status1": "Commissioned",
                "utility": "",
                "technology": "Parabolic trough",
                "status2": "Operational",
                "isNew": "No"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -106.30414,
                    35.063725
                ]
            },
            "properties": {
                "geoid": "23",
                "id": "999",
                "name": "CRFT",
                "size": "",
                "sqrtsize": "",
                "city": "Albuquerque",
                "state": "New Mexico",
                "owner": "",
                "opdate": "",
                "developer": "",
                "status1": "Commissioned",
                "utility": "",
                "technology": "Tower and heliostat",
                "status2": "Operational",
                "isNew": "No"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -110.878251,
                    32.472116
                ]
            },
            "properties": {
                "geoid": "24",
                "id": "999",
                "name": "Sundt Solar Boost",
                "size": "5",
                "sqrtsize": "",
                "city": "Tucson",
                "state": "Arizona",
                "owner": "",
                "opdate": "",
                "developer": "",
                "status1": "Announced/planning begun",
                "utility": "",
                "technology": "Parabolic trough",
                "status2": "Announced/planning begun",
                "isNew": "No"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -113.346344,
                    33.018452
                ]
            },
            "properties": {
                "geoid": "25",
                "id": "999",
                "name": "Hyder Valley Solar Energy Project",
                "size": "325",
                "sqrtsize": "",
                "city": "Hyder",
                "state": "Arizona",
                "owner": "",
                "opdate": "",
                "developer": "",
                "status1": "Announced/planning begun",
                "utility": "",
                "technology": "Parabolic trough",
                "status2": "Announced/planning begun",
                "isNew": "No"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -118.114228,
                    34.902827
                ]
            },
            "properties": {
                "geoid": "26",
                "id": "999",
                "name": "Palmdale Hybrid Power Plant",
                "size": "50",
                "sqrtsize": "",
                "city": "Palmdale",
                "state": "California",
                "owner": "",
                "opdate": "",
                "developer": "",
                "status1": "Announced/planning begun",
                "utility": "",
                "technology": "Parabolic trough",
                "status2": "Announced/planning begun",
                "isNew": "No"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -106.157166,
                    38.107817
                ]
            },
            "properties": {
                "geoid": "27",
                "id": "999",
                "name": "Saguache Solar Energy Project",
                "size": "200",
                "sqrtsize": "",
                "city": "Saguache County",
                "state": "Colorado",
                "owner": "",
                "opdate": "",
                "developer": "",
                "status1": "Announced/planning begun",
                "utility": "",
                "technology": "Tower and heliostat",
                "status2": "Announced/planning begun",
                "isNew": "No"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -117.332718,
                    34.547287
                ]
            },
            "properties": {
                "geoid": "28",
                "id": "999",
                "name": "Victorville 2 Hybrid Power Plant",
                "size": "50",
                "sqrtsize": "",
                "city": "Victorville",
                "state": "California",
                "owner": "",
                "opdate": "",
                "developer": "",
                "status1": "Announced/planning begun",
                "utility": "",
                "technology": "Parabolic trough",
                "status2": "Announced/planning begun",
                "isNew": "No"
            }
        }
    ]
}

];

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

	  	if (raw[i].properties.isNew == "Yes") {
        iconic="/sites/prod/files/orange_new.png"
      }
        else if (raw[i].properties.technology == "Tower and heliostat") {
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
	  	if (raw[i].properties.isNew == "Yes") {
        iconic="/sites/prod/files/orange_new.png"
      }
      else if (raw[i].properties.technology == "Tower and heliostat") {
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
	        popupAnchor:  [10, -35]  // point from which the popup should open relative to the iconAnchor
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