// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://anrmaps.vermont.gov/arcgis/rest/services/Open_Data/OPENDATA_ANR_TOURISM_SP_NOCACHE_v2/MapServer/163/query?where=1%3D1&outFields=id,WaterBody,Town,County,Owner,Manager,AccessType,BoatSize,RampType,UniversalAccess,SummerPortolet&outSR=4326&f=json&api_key=ssc24WIqELuiGDWTHrzOHPQfJT6XGvatpN06NddJ', true)

request.onload = function() {
  // Begin accessing JSON data here
    var data = JSON.parse(this.response);
}

// Send request
request.send()