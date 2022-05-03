# Global Position Locator Website
<img src="screenshots/interface screenshots/Maps2.PNG" align="center" />

<p align = "justify"> 
A fun website which allows users to find their own coordinates, location, IP Address as well as the <b>location of any person, place or object</b> just by entering their coordinates while listing facts regarding <b>technologies used</b> to create this project at the same time. Also for <b>travelling enthusiasts</b> who like to discover random locations across the world and plan their next trip to that location. Not to mention how helpful it is for the <b>Geography student</b> who struggles to understand the meaning of latitude and longitude and their significance in the global positioning system. 
</p>

# Website Navigation

> There are four pages on the navigation bar of this website:-

* **Home** - Shows your position **coordinates**, location including **city**, **region** and **country** and **IP Address**.
* **Geolocation** - click <img src="img/get_coordinates.PNG" height="20" width="75" /> button and enter any coordinates in **latitude and longitude prompts** and the location will be shown in the map below. Default coordinates are for Abbotsford.

<p><img alt="gif" src="https://github.com/jk7889/Global-Position-Locator-jk7899/blob/main/screenshots/Geolocation.gif" /></p>
     
* **Maps** - Generates and displays **12 random coordinates**. On mouse hover, each coordinate pair displays its **location** on the map. This allows users to find some random locations across the world which might turn into their **next destination for vacation**.

<p><img alt="gif" src="https://github.com/jk7889/Global-Position-Locator-jk7899/blob/main/screenshots/Maps.gif" /></p>

* **About** - Generates **12 random coordinates** which a user can enter on `Geolocation` page to discover a new place.

# How to use this project

1) Signin to your `gmail` account if you have one > `Google Maps Platform` > Credentials page > click Create credentials > API key
2) Get Google Maps API key > Open **Global-Position-Locator-jk7899** > js > Open `api_sample.js` > put your API Key in `api_key` variable in place of `YOUR_GOOGLE_MAPS_API_KEY_HERE` (as shown in the code below)

```
var api_key = "YOUR_GOOGLE_MAPS_API_KEY_HERE";
var api_url = "https://maps.googleapis.com/maps/api/js?key="+api_key+"&callback=initMap";
document.write('<script async defer src="' + api_url + '"></script>');
```
# Challenge

Try to find **my location** (at the time when I uploaded this project) using **Global Position Locator jk7899** system after I gave away my coordinates in one of the screenshots of this project

