// Call Stamen tiles
var layer = new L.StamenTileLayer('toner-background');

var map = new L.Map('map').setView([46.889158, -111.409401],6.6);
map.addLayer(layer);

function setColor(B01003001) {
    var B01003001_num = parseInt(B01003001)

    if (B01003001_num > 150000) {
        return '#005824';
    } else if (B01003001_num > 65000) {
        return '#238b45';
    } else if (B01003001_num > 20000) {
        return '#41ae76';
    } else if (B01003001_num > 8000) {
        return '#66c2a4';
    } else if (B01003001_num > 4000) {
        return '#99d8c9';
    } else if (B01003001_num > 500) {
        return '#ccebc5';
    } else {
        return '#edf8fb';
    }
}

function setStyle(feature) {
    return {
        opacity: 1,
        weight: 2,
        color: "#FFF",
        fillColor: setColor(feature.properties.B01003001),
        fillOpacity: 0.8
    }
}

L.geoJson(Montana_counties, {
    style: setStyle
}).addTo(map);


for (var num = 0; num < breweries.length; num++) {
    var brewery = breweries[num];
    var brewery_lat = brewery["Lat"];
    var brewery_long = brewery["Long"];
    var brewery_name = brewery["Brewery"];
    var brewery_address = brewery["Address"]
    var brewery_city = brewery["City"];
    var brewery_phonenumber = brewery["Phone"];
    var brewery_website = brewery["Website"];

    var marker = L.marker([brewery_lat, brewery_long]).addTo(map);

    var popup_html = '<h3>' + brewery_name + '</h3>';
    popup_html += '<div>' + brewery_website + '</div>';
    popup_html += '<div>' + brewery_phonenumber + '<div>'
    popup_html += '<div>' + brewery_address + '</div>';
    popup_html += '<div>' + brewery_city + '</div>';

    marker.bindPopup(popup_html);
}
