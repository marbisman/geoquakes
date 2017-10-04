// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson";
var map;
//
$(document).ready(function() {
  //console.log("Let's get coding!");


function getData(){
  $.ajax({
    method:"GET",
    url: weekly_quakes_endpoint,
    success: onSuccess,
    datatype: 'json',
    error: onError,
  }); //closing ajax
} // closing getData function
getData();

function onSuccess(responseData){
  //console.log(responseData);
  createMap();
  //dropPins({lat: 37.78,lng: -121.44}, "gdmp");
  //dropPins({lat: 39.78,lng: -121.44}, "Hello");

  var features = responseData.features[0].properties.title;
  //console.log(features);
    for (i=0; i < responseData.features.length;i++){
      var title = responseData.features[i].properties.title;
      var latitude = responseData.features[i].geometry.coordinates[0];
      var longitude = responseData.features[i].geometry.coordinates[1];
      //console.log(latitude);
      //console.log(longitude);
      var ll = {
        lat: latitude,
        lng: longitude
    };

      //console.log(ll);
      //console.log(typeof(ll));
      dropPins(ll, title);
      $('#info').append('<p>' + title + '</p>');

  }
};

function onError(){
  console.log ("Sorry, error.");
}
}); //closing jQuery onReady

function createMap(){
var myLatLng = {lat: 37.78, lng: -122.44};
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 1
    });
  };

function dropPins(latLongQuakes, pinTitle){
var marker = new google.maps.Marker({
          position: latLongQuakes,
          map: map,
          title: pinTitle,
  });
};
