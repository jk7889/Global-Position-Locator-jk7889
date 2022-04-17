function loadinfo(){
var request = new XMLHttpRequest() ;
let url ='https://www.ipinfo.io/json';
request.onreadystatechange = function() {
if ( this.readyState === 4 && this.status === 200) {
var json = JSON.parse(this.responseText);
var loc = json.loc.split(',');

document.getElementById("lat").innerHTML=loc[0];
document.getElementById("long").innerHTML=loc[1];
document.getElementById("ip").innerHTML=json['ip'];
document.getElementById("city").innerHTML=json['city'];
document.getElementById("reg").innerHTML=json['region'];
document.getElementById("cou").innerHTML=json['country'];
}
};
request.open("Get",url,true) ;
request.send() ;
}


