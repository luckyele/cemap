
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
    
    label = new BMap.Label(data.id, {offset: new BMap.Size(20, 0)}); //创建marker点的标记,这里注意下,因为百度地图可以对label样式做编辑,所以我这里吧重要的id放在了label(然后再隐藏)   
　　　　label.setStyle({display:"none"});//对label 样式隐藏    
　　　　marker.setLabel(label);  //把label设置到maker上  
　　　　　　　　　　
　　　　marker.addEventListener("click", 
        function (e) {      //这里添加maker的监听点击事件,触发自定义div("#info-panel)的展示    　　　　　　　　　　　　　　　　　　　　　　     
    　　　　　　　　$("#info-panel").toggle(300);//div展开,关闭        
　　　　　　　　　　　　me.tag=e.target.getLabel().content; //点击maker点后  获取label里面的内容       
　　　　　　　　　　　　$("#id").html(e.target.getLabel().content); //这里就可以获取到marker的id       
　　　　
    map.addOverlay(marker);    
}
