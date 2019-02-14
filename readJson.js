
var points = [];

function readJson() {
    var requestURL = "http://192.168.31.116:8080/a.json";
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = "application/json";
    request.send();
     
    //处理来自服务器的数据
    request.onload = function() {
        var gpsText = request.response;
        var facilities = JSON.parse(gpsText);
        console.log(facilities)
        // let superHeroes = request.response;
        var dispArea = document.querySelector("#disp");
        
        for (var i = 1; i<facilities.length; i++) {
            var p = document.createElement('p');
            
            var name = facilities[i][0];
            var gps_x = facilities[i][7].split(',')[0];
            var gps_y = facilities[i][7].split(',')[1];
            p.textContent = facilities[i];

            drawMarker(gps_x, gps_y, name);
            dispArea.appendChild(p);
        }        
    };
}

function drawMarker(x,y,name) {
    var point = new BMap.Point(x, y);
    var marker = new BMap.Marker(point);
    marker.setTitle(name);
    
    map.addOverlay(marker);    
}
