/**
 * 公共js
 */
/**提示信息*/
function tipMsg(msg){
	msg = msg == undefined ? "提示" : msg;
	//tipMsg(typeof mui == 'function')
	if( typeof mui == 'function' ){
		mui.toast(msg,{"duration":"long"});
	}else{
		alert(msg);
	}
}
Date.prototype.format = function(format) {
	var localTime = this.getTime(); 
	var now = new Date(localTime); 
	var dateFormat = formatTime(format,now);
	return dateFormat;
}
/**格式化时间*/
function formatTime(format,date){
	var now = date;
	var o = {
		"M+" : now.getMonth() + 1, //month
		"d+" : now.getDate(), //day
		"h+" : now.getHours(), //hour
		"m+" : now.getMinutes(), //minute
		"s+" : now.getSeconds(), //second
		"q+" : Math.floor((now.getMonth() + 3) / 3), //quarter
		"S" : now.getMilliseconds()
	//millisecond
	}
	if (/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (now.getFullYear() + "")
				.substr(4 - RegExp.$1.length));
	}
	for ( var k in o) {
		if (new RegExp("(" + k + ")").test(format))
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
					: ("00" + o[k]).substr(("" + o[k]).length));
	}
	return format;
}
/**替换字符中部分为* */
function replaceStrToX(str){
	if( str == null || str == "" || str == undefined){
		return str;
	}
	var s = str.substring(3,str.length-3);//保留前3后3
	var x = "";
	for(var i in s){
		x += "*";
	}
	var r = str.replace(s,x); //其余部分替换为*
	return r;
}
/**跳转额度测算*/
function toReckon(type){
	if( type == 1){
		//从首页跳转
		localStorage.back_url = "index.html";
		localStorage.back_title = "返回首页";
	}else if( type == 2){
		//从企业贷申请界面跳转
		localStorage.back_url = "qydDetail.html";
		localStorage.back_title = "返回申请页";
	}else if( type == 3){
		//从公喜贷申请界面跳转
		localStorage.back_url = "gxdDetail.html";
		localStorage.back_title = "返回申请页";
	}
	location.href="reckon.html";
}
/**跳转申请前进行验证*/
function toApply(url){
	if(url == undefined){
		return;
	}
	//验证微信号是否已申请
	$.ajax({
		type:"POST",
		url:"getApplyStatusByOpenId",
		dataType:"json",
		cache:false,
		async:false,
		success:function(data){
			if(data.code=="200"){
				if( data.status == 0 || data.status == 11 || data.status == -1){
					location.href = url;
				}else if( data.status == 10 ){
					tipMsg("您已申请完成,请联系办理机构");
				}else{
					tipMsg("您的申请正在处理中，请勿重复提交!");
				}
			}else{
				tipMsg("请求失败，请稍后重试");
			}
		}
	});
	
	
}
