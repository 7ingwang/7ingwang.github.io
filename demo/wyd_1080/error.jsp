<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
    <head>
    	<title>失败</title>
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
    <body id="activities">
       <div class="theme-box" id="theme-success">
        </div><!-- .theme-box -->
        <div class="block tips">
            <p>访问出现问题！<br>
			请稍后重试！<br>
			<button type="button" class="mui-btn mui-btn-blue" onclick="location.href='index'" ><i class="icon icon-home icon12 icon-mr"></i>返回首页</button>
        </div><!-- .block -->
        
        <div id="footer">
            <p>Copyright &copy; 中国民生银行</p>
        </div><!-- #footer -->
    </body>
</html>
