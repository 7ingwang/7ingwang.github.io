/**
 * 利息计算器
 */
  $(function(){
	    //初始化贷款期限
     	 var _limit = $("#limit");
     	 for(var i=1;i<=36;i++){
    	     $("<option></option>").val(i).text(i+"月")
				.appendTo(_limit);
    	 }
     	 //利率初始化值
     	 var vll = 5.655;
     	 $("#ll").val(vll);
     	 
     	 
     	$("#jsBtn").on("click",function(){
     			var reg = /^[0-9]*[1-9][0-9]*$/;
     		    var jk = $("#jk").val(); //借款金额
	     		var limit = _limit.val(); //期限
	     		if( !reg.test(jk) || jk < 1000 || jk > 500000 ){
	     			tipMsg("请输入1000-500000元整数金额");
	     			return;
	     		}
	     		var ll = $("#ll").val(); //年华利率
	     		if( ll < 0 || ll > 100 ){
	     			tipMsg("我们的利率没有那么高哟！");
	     			return;
	     		}
	     		if( ll == 0 || ll == 100 ){
	     			tipMsg("利率输入错误,请重新输入!");
	     			return;
	     		}
	     		/**
	     		 *贷款总额=借款金额、还款总额=贷款总额+支付利息
	     		 *支付利息=每月支付利息*贷款月数、月均还款=每月支付利息（根据输入项及公式计算，结果保留两位小数。）
	     		 *还款方式对应计算公式 ：1、按月付息，到期还本
	     		 *计算公式：    每月应还款金额 = 借款金额*（年化利率/12）
	     		 */
	     		 //贷款总额
	     		 var dkze = jk;
	     		 //贷款月数
	     		 var dkys = limit
	     		 //月均还款
	     		 var yjhk = (jk*(ll/100/12));
	     		  //支付利息
	     		 var zflx =(yjhk*limit);
	     		  //还款总额
	     		 var hkze = (Number(jk)+Number(zflx));
	     		 $(".dkze").next("em").text(jk);
	     		 $(".hkze").next("em").text(hkze.toFixed(2));
	     		 $(".zflx").next("em").text(zflx.toFixed(2));
	     		 $(".dkys").next("em").text(limit);
	     		 $(".yjhk").next("em").text(yjhk.toFixed(2));
	     		 //var html = "贷款总额:"+jk+"<br/>还款总额:"+hkze+"<br/>支付利息:"+zflx+"<br/>"+"月均还款:"+yjhk;
	     		 $("#result").show();
     	});
     });
     	