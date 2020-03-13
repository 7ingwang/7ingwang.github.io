<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>提示</title>
	<meta charset="UTF-8">
	    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
	    <meta content="yes" name="apple-mobile-web-app-capable" />
	    <meta content="black" name="apple-mobile-web-app-status-bar-style" />
	    <meta content="telephone=no,email=no" name="format-detection" />
	    <meta name="description" content="">
	    <link rel="shortcut icon" type="style/image/png" href="favicon.png">
	    <link rel="stylesheet" href="style/css/mui.min.css">
	    <link rel="stylesheet" href="style/css/animate.min.css">
	    <link rel="stylesheet" href="style/css/icon.css">
	    <link rel="stylesheet" href="style/css/style.css">

  </head>
    <script type="text/javascript">
		 	function onBridgeReady(){
				WeixinJSBridge.call('hideOptionMenu');
			}
		
			if (typeof WeixinJSBridge == "undefined"){
			    if( document.addEventListener ){
			        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
			    }else if (document.attachEvent){
			        document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
			        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
			    }
			}else{
			    onBridgeReady();
			}
	</script>  
  <body>
     <body id="activities">
       <div class="theme-box" id="theme-success">
        </div><!-- .theme-box -->
        <div class="block tips">
        	<!-- customid获取失败 -->
            <c:if test="${code == 201 }">
            <p>${msg }</p><br>
            </c:if>
        	<!-- 已申请完成 -->
            <c:if test="${code == 202 }">
            <p>您已申请完成,请联系办理机构<c:if test="${not empty info.INST_TEL }">(${info.INST_TEL })</c:if></p><br>
            </c:if>
            <!-- 申请处理中 -->
             <c:if test="${code == 203 }">
            <p>您的申请正在处理中，请勿重复提交!</p><br>
            </c:if>
        	<button type="button" class="mui-btn mui-btn-blue" onclick="location.href='index'" ><i class="icon icon-home icon12 icon-mr"></i>返回首页</button>
        </div><!-- .block -->
        
        <div id="footer">
            <p>Copyright &copy; 中国民生银行</p>
        </div><!-- #footer -->
    </body>
  </body>
</html>
