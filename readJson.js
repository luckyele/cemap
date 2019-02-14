function readJson() {
    var requestURL = "http://192.168.56.1:8080/a.json";
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
        
        for (var i = 0; i<facilities.length; i++) {
            var p = document.createElement('p');
            p.textContent = facilities[i];
            dispArea.appendChild(p);
        }        
    };
}