

function readJson() {
    var requestURL = "/a.json";
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = "application/json";
    request.send();
    
    //处理服务器数据
    request.onload = function() {
        var gpsText = request.response;
        var facilities = JSON.parse(gpsText);
        var dispArea = document.querySelector("#disp");
        for (var i = 1; i<facilities.length; i++) {
            var p = document.createElement('p');            
            var name        = facilities[i][0];
            var id          = facilities[i][1];
            var hierarchy   = facilities[i][2];
            var area        = facilities[i][3];
            var telephon    = facilities[i][4];
            var address     = facilities[i][5];
            var level       = facilities[i][6];
            var gps_x       = facilities[i][7].split(',')[0];
            var gps_y       = facilities[i][7].split(',')[1];
            var n = 1500;    
            var city = document.getElementById("districtName");        
            if (area == city.value) {
                drawMarker(gps_x, gps_y, facilities[i]);            
                p.textContent   = name + " " + gps_x +","+ gps_y;
                if (hierarchy == "省级")
                    n = 2500;
                if (hierarchy == "县级")
                    n = 1500;
                if (hierarchy == "市级")
                    n = 2000;
                var circle = new BMap.Circle(new BMap.Point(gps_x, gps_y), n);
                console.log(circle);
                circle.setFillColor("#FF9900"); //填充颜色
                circle.setStrokeColor("#FF9900"); //边线颜色
                map.addOverlay(circle);            //增加圆
            }                   
            dispArea.appendChild(p);
        }

      
    };
}

function drawMarker(x, y, f) {
    var point = new BMap.Point(x, y);
    var marker = new BMap.Marker(point);
    marker.setTitle(f[0] + "\n" + f[4] + "\n" + f[5]);
    map.addOverlay(marker);
    console.log(point);
}
