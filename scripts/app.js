// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson";
//
$(document).ready(function() {
  console.log("Let's get coding!");

function getData(){
  $.ajax({
    method:"GET",
    url: weekly_quakes_endpoint,
    success: onSuccess,
    datatype: 'json',
    error: onError,
  });
}

  function onSuccess(responseData){
    console.log(responseData);

    var map = new google.maps.Map(document.getElementById('map'), {
             center: {lat: 37.78, lng: -122.44},
             zoom: 2
           });

    var features = responseData.features[0].properties.title;
    console.log(features);
    for (i=0; i < responseData.features.length;i++){
      var title = responseData.features[i].properties.title;
      var latitude = responseData.features[i].geometry.coordinates[0];
      var longitude = responseData.features[i].geometry.coordinates[1];
      $('#info').append('<p>' + title + '</p>');
      }
    }

  function onError(responseData){
        console.log("Error");

  }
  getData();

  //google map api key: AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg

//grab the first earthquake
// grab it's title?
//grab it's geological coordinates: latitude & longitude
//When did it happen?
//How many hours ago is that?

//div id #info

//quakes.features[0].geometry.coordinates[0] for latitude
//quakes.features[0].geometry.coordinates[1] for longitude
//title: features[0].properties.title
});
