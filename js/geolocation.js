var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 49.026665, lng: -122.284157}, //49.026665, -122.284157
    zoom: 8
  });
}

function getLocation(){
var latitude = prompt("Please enter a latitude between +90 and -90 with the sign", "49.026665");
var longitude = prompt("Please enter a longitude between +180 and -180 with the sign","-122.284157");
if((latitude != null)&&((-90.0<latitude)&&(latitude<90.0))){
    document.getElementById("latt").innerHTML=latitude;
}else{
    alert("This is not a valid value for the latitude")
}

if((longitude != null)&&((-180.0<longitude)&&(longitude<180.0))){
    document.getElementById("lonn").innerHTML=longitude;
}else{
    alert("This is not a valid value for the longitude")
}

document.getElementById("msg").innerHTML="Geolocation is enabled by your browser";
document.getElementById("msg").style="background-color:green; color:white;";

var latit = parseInt(latitude, 10);
var longig = parseInt(longitude, 10);

map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: latit, lng: longig}, //49.026665, -122.284157 
    zoom: 8
  });

}

