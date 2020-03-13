/**
 * 额度测试js
 */
$(function(){
   	 	    $("#checkBtn").on("click",function(){
   	 	    	var inCome = $("#inCome").val();
   	 			var professional = $("#professional").val(); //职业
   	 			var loanLimit = $("#loanLimit").val(); //期限
   	 			
   	 			var reg = /^[0-9]*[1-9][0-9]*$/;
   	 			if( !reg.test( inCome) ){
   	 				tipMsg("年收入只支持整数");
   	 				return;
   	 			}
   	 			if( professional == "0" || professional == 0){
   	 				tipMsg("请选择本人职业");
   	 				return;
   	 			}
   	 			if( loanLimit == "0" || loanLimit == 0){
	 				tipMsg("请选择贷款期限");
	 				return;
	 			}
   	 			var assets = $("#assets").val(); 
   	 			assets = assets==null || assets == "" ? 0 :assets;
   	 			if( assets !=0 && !reg.test( assets) ){
   	 				tipMsg("在我行金融资产只支持整数");
   	 				return;
   	 			}
   	 			var house = $("#house").val();
   	 			house == house == null || house == "" ? 0 :house;
   	 			if( house !=0 && !reg.test( house) ){
   	 				tipMsg("房产价格只支持整数");
   	 				return;
   	 			}
   	 			var otherLoan = $("#otherLoan").val();
   	 			otherLoan == otherLoan == null || otherLoan == "" ? 0 :otherLoan;
   	 			if( otherLoan !=0 && !reg.test( otherLoan) ){
   	 				tipMsg("他行信用贷款金额只支持整数");
   	 				return;
   	 			}
   	 			var yg = $("#yg").val();//月供
   	 			if( yg !=0 && !reg.test( yg) ){
   	 				tipMsg("月供款只支持整数");
   	 				return;
   	 			}
   	 			/**
   	 			 *职业调整系数 1类1.2 2类1.1 3类1
   	 			 *各省市消费支出 北京31104
   	 			 *贷款期限系数 1年1 2年1.5 3年2
   	 			 *风险调整系数 0.85
   	 			 *估算授信额度=（借款人年收入×职业调整系数－所在城市年消费支出×1－借款人月供款×12）×贷款期限系数×风险调整系数＋
   	 			 *（借款人在我行金融资产×50%＋房产价值×20%－他行信用贷款金额）
   	 			 */
   	 			 var total = (inCome*10000*professional-31104*1-yg*12)*loanLimit*0.85+(assets*10000*0.5+house*10000*0.2-otherLoan*10000);
   	 			 total = (total/10000).toFixed(0);
   	 			 total = total < 0 ? "0" : total;
   	 			 total = total > 50 ? 50 : total;
   	 			localStorage.total = total;
   	 			window.location.href="reckon-result.html";
   	 	    });	    
   	 	});
(function($, doc) {
	$.init();
	$.ready(function() {
		//本人职业
		var userPicker = new $.PopPicker();
		userPicker.setData([{
			value: '1.2',
			text: '党政机关及事业单位'
		}, {
			value: '1.2',
			text: '国家重点科研院所'
		},{
			value: '1.2',
			text: '公立教育机构'
		},{
			value: '1.2',
			text: '公立医疗机构'
		},{
			value: '1.2',
			text: '中央企业'
		},{
			value: '1.2',
			text: '地方国有企业'
		},{
			value: '1.2',
			text: '优质新兴信息科技企业'
		},{
			value: '1.1',
			text: '国际国内500强企业'
		},{
			value: '1.1',
			text: '优质境内主板上市公司'
		}, {
			value: '1',
			text: '中小板'
		}, {
			value: '1',
			text: '创业板上市公司'
		}, {
			value: '1',
			text: '金融机构'
		}, {
			value: '1',
			text: '专业人士'
		}]);
		var showUserPickerButton = doc.getElementById('job');
		var jobResult = doc.getElementById('jobResult');
		showUserPickerButton.addEventListener('tap', function(event) {
			userPicker.show(function(items) {
				if( items[0].text != undefined){
					document.getElementById("professional").value = items[0].value;
					jobResult.value = items[0].text;
				}else{
					document.getElementById("professional").value = 0;
				}
				//jobResult.innerText = JSON.stringify(items[0]);
				//返回 false 可以阻止选择框的关闭
				//return false;
			});
		}, false);
		//-----------------------------------------
		//拟贷款期限
		var limitPicker = new $.PopPicker();
		limitPicker.setData([{
			value: '1',
			text: '一年'
		}, {
			value: '1.5',
			text: '二年'
		}, {
			value: '2',
			text: '三年'
		}]);
		var limit = doc.getElementById('loan-time-limit');
		var limitResult = doc.getElementById('limitResult');
		limit.addEventListener('tap', function(event) {
			limitPicker.show(function(items) {
				if( items[0].text != undefined ){
					document.getElementById("loanLimit").value = items[0].value;
					limitResult.value = items[0].text;
				}else{
					document.getElementById("loanLimit").value = 0;
				}
				
				//limitResult.innerText = JSON.stringify(items[0]);
				//返回 false 可以阻止选择框的关闭
				//return false;
			});
		}, false);
		//-----------------------------------------

    });
})(mui, document);