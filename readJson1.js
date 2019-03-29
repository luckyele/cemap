/* Read data from JSON file */

function readJson() {
    var requestURL = "/demo_regions.json";
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = "application/json";
    request.send();

    // //处理服务器数据
    // request.onload = function() {
    //     var text = request.response;
    //     console.log()
    //     var facilities = JSON.parse(text);
    //     for (var i = 1; i<facilities.length; i++) {
            
    //         var id          = facilities[i][0];
    //         var province    = facilities[i][1];
    //         var city        = facilities[i][2];
    //         var area        = facilities[i][3];
    //         var txt = $("<p></p>").text(id + "," + provine + "," + "," + area);
    //         $("#disp").append(txt)
    //     }
      
    // };
}

function drawMarker(x, y, f) {
    var point = new BMap.Point(x, y);
    var marker = new BMap.Marker(point);
    marker.setTitle(f[0] + "\n" + f[4] + "\n" + f[5]);
    map.addOverlay(marker);
    console.log(point);
}
