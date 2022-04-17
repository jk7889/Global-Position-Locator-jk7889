var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 49.026665, lng: -122.284157}, //49.026665, -122.284157
    zoom: 8
  });

  generateRandomCoordinates();
}

function generateRandomCoordinates(){
    var i;
    for(i=0;i<12;i++){
        document.getElementById(i).innerHTML= (Math.random() * ( 90 - 1 )) + 1;
    }

    var j;
    for(j=20;j<32;j++){
        document.getElementById(j).innerHTML=-(Math.random() * ( 180 - 1 )) + 1; 
    }
}

function displayMap(obj) {
    var coordinate = document.getElementById(obj.id).innerHTML;
    var checkcoord = parseInt(coordinate,10);
    if(checkcoord<0){
    var longig = parseInt(obj.id, 10); //when mouse hovers on longitude, it also takes the latitude into account and together the coordinates display the location on the map
    var latit = longig-20;
    var latid=latit.toString();
    var latt = document.getElementById(latid).innerHTML;
    var lattit = parseInt(latt, 10);

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: lattit, lng: checkcoord}, //49.026665, -122.284157
        zoom: 8
      });
      
  }
}