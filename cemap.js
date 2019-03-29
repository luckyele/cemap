<script type="text/javascript">
			function displayArea(){
			    var flags = checkStatus();
			    $.get("json/demo_regions.json", function(data){
			    	var flag = checkStatus();
			    	
			    	for (var i = 0; i < data.length; i++) {
			    		switch(data[i].time) {
			    			case '1': getBoundary(data[i].city, "blue"); break;
			    			case '2': getBoundary(data[i].city, "yellow"); break;
			    			case '3': getBoundary(data[i].city, "green"); break;	
			    			case '4': getBoundary(data[i].city, "red"); break;
			    			default	: getBoundary(data[i].city, "blue"); break;
			    			}
			    	}
			    });
            }


			function checkStatus(){
			    var FLAG_MASS = 1
			    var FLAG_LIB = 2
			    var FLAG_MU = 4
			    var FLAG_ST = 8
			    var flag = 0
			    var v1 = document.getElementById("first");
			    var v2 = document.getElementById("second");
			    var v3 = document.getElementById("third");
			    var v4 = document.getElementById("forth");

			    if (v1.checked)
			        flag |= FLAG_MASS;
			    if (v2.checked)
			        flag |= FLAG_LIB;
			    if (v3.checked)
			        flag |= FLAG_MU;
			    if (v4.checked)
			        flag |= FLAG_ST;
			    console.log(flag);
			    return flag;
			}

			function onClickSelectAll(){
			    var v1 = document.getElementById("first");
			    var v2 = document.getElementById("second");
			    var v3 = document.getElementById("third");
			    var v4 = document.getElementById("forth");
			    if (document.getElementById("select_all").checked == true) {
			        v1.checked = true;
			        v2.checked = true;
			        v3.checked = true;
			        v4.checked = true;
			    }
			    else {
			        v1.checked = false;
			        v2.checked = false;
			        v3.checked = false;
			        v4.checked = false;
			    }
			}

			function getBoundary(name, color){       
			    var bdary = new BMap.Boundary();
			    bdary.get(name, function(rs){       
			        //map.clearOverlays();        
			        var count = rs.boundaries.length; 
			        for(var i = 0; i < count; i++){
			            var ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight:2,fillColor:color,strokeColor:color}); 
			            map.addOverlay(ply);
			            map.setViewport(ply.getPath());
			        }
			    });
			}
			
			function displayFacilities(){
				var name = $("#districtName").val();
				getBoundary(name);
///				drawMarker();
			}

			function removeMarker(){
				var allMarkers = map.getOverlays();
				for(var i = 0; i < allMarkers.length; i++) {
					map.removeOverlay(allMarkers[i]);
				}
			}

			

			var map = new BMap.Map("container");
			var point = new BMap.Point(117.288463,31.867939);
			map.centerAndZoom(point,5);
			map.enableScrollWheelZoom();
			map.enableKeyboard();

			map.addControl(new BMap.NavigationControl())
			var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
			map.addControl(ctrl_nav);


 			//去除路网
            map.setMapStyle({
                styleJson:[
                 {
	                 "featureType": "road",
	                 "elementType": "all",
	                 "stylers": {
						  "color": "#ffffff",
						  "visibility": "off"
			          }
                  },
                  {
                      "featureType": "building",
                      "elementType": "all",
                      "stylers": {
                          "visibility": "off"
                      }
                  },
                  {
                      "featureType": "poilabel",
                      "elementType": "all",
                      "stylers": {
                          "visibility": "off"
                      }
                  },
                  {
                      "featureType": "manmade",
                      "elementType": "all",
                      "stylers": {
                          "visibility": "off"
                      }
                  },
                ]
            });
	    </script>  