/* Read data from JSON file */

function readJson() {
    var requestURL = "json/demo_regions.json";
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.send();

    //处理服务器数据
    request.onload = function() {
        var text = request.response;
        console.log(text)
        var facilities = JSON.parse(text);

        for (var i = 0; i<facilities.length; i++) {
            var province  = facilities[i].province;
            var city      = facilities[i].city;
            var time      = facilities[i].time;
            var txt = $("<p></p>").text(province + "," + city + "," + time);
            $("#disp").append(txt);
         }
    };
}

// function drawMarker(x, y, f) {
//     var point = new BMap.Point(x, y);
//     var marker = new BMap.Marker(point);
//     marker.setTitle(f[0] + "\n" + f[4] + "\n" + f[5]);
//     map.addOverlay(marker);
//     console.log(point);
// }
