function goLocation(){
       	var options = {
				enableHighAccuracy: true,
				maximumAge: 1000
			};
			if(navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
			} else {
				mui.toast("手机不支持定位");
			}
    }
function onSuccess(position) {
			var longitude = position.coords.longitude;
			var latitude = position.coords.latitude;
			//orientationQuery(longitude, latitude);
			//alert("经度：" + longitude + ", 纬度：" + latitude);
			$.post("nearInst", {'longitude' : longitude,'latitude' : latitude,'raidus' : '3000'}, function(msg) {
				localStorage.instNo = msg["nearInstList"][0].instNo;
				localStorage.instName = msg["nearInstList"][0].instName;
    			localStorage.instAddr = msg["nearInstList"][0].instAddr;
    			var formId = localStorage.formId;
    			$("#"+formId).find("#selInst").text(localStorage.instName);
				$("#"+formId).find("#selInstDiv").find("p").eq(0).remove();
				$("#"+formId).find("input[name='instNo']").val(localStorage.instNo);
				$("#"+formId).find("#selInstDiv").append("<p>"+localStorage.instAddr+"</p>");
			});
}
function onError(error) {
			switch(error.code) {
				case 1:
					mui.toast("位置服务被拒绝");
					break;
				case 2:
					mui.toast("暂时获取不到位置信息");
					break;
				case 3:
					mui.toast("获取位置信息超时");
					break;
				case 4:
					mui.toast("未知错误");
					break;
			}
}

