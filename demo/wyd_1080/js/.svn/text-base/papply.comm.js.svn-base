/**
 * 消费贷js
 */
/**公共变量*/
var QYD_TYPE_ID = 0; //企业贷ID
var GXD_TYPE_ID = 1; //公喜贷ID
var COUNT_DOWN = 60;//倒计时间隔 秒
/**获取区域列表*/
function getCircleList(dom_circleId){
	if( !dom_circleId ){
		return;
	}
	$.post("getCircleList",function(data){
			$.each(data,function(i,item){
				$("<option></option>").val(item.CIRCLE_ID).text(item.CIRCLE_NAME)
				.appendTo(dom_circleId);
			});
		});
}
/**根据区域获取支行*/
function getInstList(circleId,dom_instNo){
	if( !dom_instNo ){
		return;
	}
	dom_instNo.empty();
	$("<option></option>").val("0").text("--请选择--").appendTo(dom_instNo);
	$.post("getInstList",{circleId:circleId},function(data){
			$.each(data,function(i,item){
				$("<option></option>").val(item.INST_NO).text(item.INST_NAME)
				.appendTo(dom_instNo);
			});
	});
}
/**验证姓名*/
function checkName(dom_name){
	//dom对象
	if( !dom_name ){
		return false;
	}
	var name = dom_name.val();
	if( name == null || name.length < 2){
		tipMsg("申请人姓名输入错误");
		//dom_name.focus();
		return false;
	}
	return true;
}
/**验证身份证号*/
function checkCn_style(dom_cn){
	if( !dom_cn ){
		return false;
	}
	var cn = dom_cn.val();
	var reg = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;
	if( !reg.test(cn)){
		tipMsg("身份证号不正确");
		//dom_cn.focus();
		return false;
	}    
	return true;
}
//身份证号合法性验证
//支持15位和18位身份证号
//支持地址编码、出生日期、校验位验证
function checkCn(dom_cn) {
	if( !dom_cn ){
		return false;
	}
	var code = dom_cn.val();
    var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
    var tip = "";
    var pass= true;

    if(!code || !/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/i.test(code)){
        tip = "身份证号格式错误";
        pass = false;
    }

    else if(!city[code.substr(0,2)]){
        tip = "地址编码错误";
        pass = false;
    }
    else{
        //18位身份证需要验证最后一位校验位
        if(code.length == 18){
            code = code.split('');
            //∑(ai×Wi)(mod 11)
            //加权因子
            var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
            //校验位
            var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
            var sum = 0;
            var ai = 0;
            var wi = 0;
            for (var i = 0; i < 17; i++)
            {
                ai = code[i];
                wi = factor[i];
                sum += ai * wi;
            }
            var last = parity[sum % 11];
            if(parity[sum % 11] != code[17]){
                tip = "身份证号不正确";
                pass =false;
            }
        }
    }
    if(!pass){
    	tipMsg(tip);
    }
    return pass;
}
function getCNAge(UUserCard){
	 //获取年龄
 var myDate = new Date();
 var month = myDate.getMonth() + 1;
 var day = myDate.getDate();
 var age = myDate.getFullYear() - UUserCard.substring(6, 10) - 1;
 if (UUserCard.substring(10, 12) < month || UUserCard.substring(10, 12) == month && UUserCard.substring(12, 14) <= day) {
     age++;
 }
return age;
}

/**验证手机号*/
function checkMobile(dom_mobile){
	if( !dom_mobile ){
		return false;
	}
	var mobile = dom_mobile.val();
	var reg = /^(((13[0-9]{1})|14[0-9]{1}|15[0-9]{1}|18[0-9]{1}|17[0-9]{1})\d{8})$/;  
	if( !reg.test(mobile)){
		tipMsg("手机号不正确");
		//dom_mobile.focus();
		return false;
	}
	return true;
}
/**验证验证码*/
function checkCode(mobile,dom_code){
	if( !mobile || !dom_code ){
		return false;
	}
	var code = dom_code.val();
	if( code == null || code == ""){
		tipMsg("验证码错误");
		//dom_code.focus();
		return false;
	}
	var checkReturn = false;
	$.ajax({
		url : "checkMobileCode",
		data : {mobile:mobile,code:code},
		async : false,
		type : "post",
		success : function(data){
			checkReturn = data;
		}
	});
	if( !checkReturn ){
		tipMsg("验证码错误");
		//dom_code.focus();
	}
	return checkReturn;
}
/**验证年收入*/
function checkInCome(dom_inCome){
	if( !dom_inCome ){
		return false;
	}
	var inCome = dom_inCome.val();
	if( inCome == null || inCome <= 0 ){
		tipMsg("请输入年收入");
		//dom_inCome.focus();
		return false;
	}
	//万为计算单位
	if( inCome < 8 ){
		tipMsg("不符合我行准入条件，感谢您的支持！");
		//dom_inCome.focus();
		return false;
	}
	return true;
}
/**验证区域与支行*/
function checkAreaAndInst(dom_area,dom_inst){
	if( !dom_area || !dom_inst){
		return false;
	}
	if( dom_area.val() == 0){
		tipMsg("请选择区域");
		//dom_area.focus();
		return false;
	}
	if( dom_inst.val() == 0){
		tipMsg("请选择支行");
		//dom_inst.focus();
		return false;
	}
	return true;
}
/***
 * 验证支行
 */
function checkInst(dom_inst){
	if( !dom_inst ){
		return false;
	}
	var inst = dom_inst.val();
	if( inst == null || inst == "" || inst == 0){
		tipMsg("请选择支行");
		//dom_inst.focus();
		return false;
	}
	return true;
}
/**验证企业名称*/
function checkEntName(dom_entName){
	if( !dom_entName ){
		return false;
	}
	var name = dom_entName.val();
	if( name == "" || name == null ){
		tipMsg("请输入企业名称");
		return false;
	}
	return true;
}
/**企业类型*/
function checkEntType(dom_entType){
	if( !dom_entType ){
		return false;
	}
	var type = dom_entType.val();
	if( type == 0 ){
		tipMsg("请选择企业类型");
		return false;
	}
	return true;
}
/**验证公积金缴存年限*/
function checkGjjAge(dom_gjjAgeLimit){
	if( !dom_gjjAgeLimit ){
		return false;
	}
	var age = dom_gjjAgeLimit.val();
	if( age == 0){
		tipMsg("请选择公积金缴存年限");
		//dom_gjjAgeLimit.focus();
		return false;
	}
	if( age == 1){
		tipMsg("缴存年限不符合此产品准入条件，请您选择其他产品");
		//dom_gjjAgeLimit.focus();
		return false;
	}
	return true;
}
/**验证公积金缴存*/
function checkGjjAmount(dom_gjjAmount){
	if( !dom_gjjAmount ){
		return false;
	}
	var gjjAmount = dom_gjjAmount.val();
	if( gjjAmount == null || gjjAmount == ""){
		tipMsg("请填写公积金所缴存金额");
		//dom_gjjAmount.focus();
		return false;
	}
	if( gjjAmount < 900 ){
		tipMsg("公积金缴存不符合此产品准入条件，请您选择其他产品");
		//dom_gjjAmount.focus();
		return false;
	}
	return true;
}
//定时器变量
var InterValObj = null; //timer变量，控制时间
var curCount = 0;//当前剩余秒数
var time_btn = null;
/**发送手机验证码*/
function sendCheckCode(mobile,btn){
	time_btn = btn;
	if( curCount > 0){
		return false;
	}
	curCount = COUNT_DOWN;
	$(btn).attr("disabled",true);
	InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
	$.post("getMobileCheckCode",{mobile:mobile},function(msg){
		if( msg["code"] == 200){
			//InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
		}else if( msg["code"] == 300){
			alert("操作太频繁，请稍后再试！");
			$checkBtn.text("重发验证码");
		}else{
			alert("获取验证码失败");
			$checkBtn.text("重发验证码");
		}
	});
}
/**重发倒计时*/
function SetRemainTime() {
   if (curCount == 0) {    
         window.clearInterval(InterValObj);//停止计时器
         if( time_btn != undefined && time_btn != null ){
        	 $(time_btn).attr("disabled",false);
        	 time_btn.text("重发验证码");
         }
   }else{
         curCount--;
         if( time_btn != undefined && time_btn != null ){
        	 time_btn.text("重发" + (curCount+1) + "秒");
         }
   }
}
/**选择支行*/
function selInst(){
	//alert(1)
	//$("#test11").load("inst.html")
	window.location.href="inst.html";
}
/**清除本地存储数据*/
function clearStorage(){
	localStorage.removeItem("enterPriseName");
	localStorage.removeItem("productId");
	//localStorage.removeItem("isWhite");
	localStorage.removeItem("instName");
	localStorage.removeItem("circleId");
	localStorage.removeItem("enterPriseId");
	localStorage.removeItem("enterPriseType");
	localStorage.removeItem("instNo");
	localStorage.removeItem("instAddr");
}
/**设置本地数据*/
function setLocalStorage(key,val){
	if( val !=undefined ){
		localStorage[key] = val;
	}
}
/**获取本地数据*/
function getLocalStorage(key){
	var val = localStorage[key];
	if( val == undefined || val == "" ){
		return null;
	}
	return val;
}
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
/**特殊字符校验*/
function checkSpechars(s) {
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]")
    for (var i = 0; i < s.length; i++) {
    	if( pattern.test(s.substr(i, 1))){
    		return false;
    	}
    	continue;
    }
    return true;
}
