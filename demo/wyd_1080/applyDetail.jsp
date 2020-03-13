<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
     <meta charset="UTF-8">
	    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
	    <meta content="yes" name="apple-mobile-web-app-capable" />
	    <meta content="black" name="apple-mobile-web-app-status-bar-style" />
	    <meta content="telephone=no,email=no" name="format-detection" />
	    <meta name="description" content="">
        <title>申请详情</title>
         <link rel="shortcut icon" type="style/image/png" href="favicon.png">
        <link rel="stylesheet" href="style/css/mui.min.css">
        <link rel="stylesheet" href="style/css/animate.min.css">
        <link rel="stylesheet" href="style/css/icon.css">
        <link rel="stylesheet" href="style/css/style.css">
		 <script src="js/jquery-2.1.1.min.js"></script>
		 <script src="js/comm.js"></script>
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
  <body id="my-detail">
        <div class="theme-box" id="theme-my"></div><!-- .theme-box -->
        <div class="block without">
            <c:choose>
            	<c:when test="${info.PRODUCT_ID == 0 }"><h2>我的消费微贷申请信息</h2></c:when>
            	<c:when test="${info.PRODUCT_ID == 1 }"><h2>我的公喜贷申请信息</h2></c:when>
            	<c:otherwise><h2>我的申请信息</h2></c:otherwise>
            </c:choose>
            <div class="box">
                <ul>
                    <li><i class="icon icon-firm icon16"></i>企业名称<span class="mui-pull-right">${info.ENTERPRISE_NAME }</span></li>
                    <li><i class="icon icon-person icon16"></i>姓名<span class="mui-pull-right">${info.NAME }</span></li>
                    <li><i class="icon icon-card icon11"></i>身份证号<span id="cn" class="mui-pull-right">${info.CN }</span></li>
                    <li><i class="icon icon-mobile icon16"></i>手机号<span id="mobile" class="mui-pull-right">${info.MOBILE }</span></li>
                    <!-- <li><i class="icon icon-ask icon16"></i>是否已在申请单位工作满一年<span class="mui-pull-right"><c:if test="${info.TO_AYEAR == 1}">是</c:if><c:if test="${info.TO_AYEAR == 0}">否</c:if></span></li> -->
               		<!--<c:if test="${info.JOB_STATUS eq 10 }">
               			<li><i class="icon icon-mobile icon16"></i>审批额度<span id="quota" class="mui-pull-right">${info.QUOTA }</span></li>
               		</c:if>-->
                </ul>
                <script>
                	$(function(){
                		var cn = $(".box #cn").text();
                		$(".box #cn").text(replaceStrToX(cn));
                		var cn = $(".box #mobile").text();
                		$(".box #mobile").text(replaceStrToX(cn));
                	})
                </script>
            </div><!-- .box -->
        </div><!-- .block -->
        <div class="block without">
            <h2>申请状态</h2>
            <div class="box" id="steps">
                <ul>
                   <c:forEach items="${data }" var="d" varStatus="s">
                   	<c:if test="${!s.last }">
                   		<li><i class="icon finished">${s.index+1 }</i><span class="mui-pull-left"><fmt:formatDate value="${d.CREATE_TIME }" pattern="yyyy-MM-dd" /></span><span class="text">${d.JOB_STATUS_NAME }</span></li>
                   	</c:if>
                	  <c:if test="${s.last }">
                	  	<c:if test="${! empty info.NEXT_OP}">
                	  		<li><i class="icon">${s.index+1 }</i><span class="mui-pull-left"></span><span class="text">${d.JOB_STATUS_NAME }</span></li>
                	  	</c:if>
                	  	<c:if test="${ empty info.NEXT_OP}">
                	  		<li><i class="icon finished">${s.index+1 }</i><span class="mui-pull-left"><fmt:formatDate value="${d.CREATE_TIME }" pattern="yyyy-MM-dd" /></span><span class="text">${d.JOB_STATUS_NAME }</span></li>
                	  	</c:if>
               		 </c:if>
                	</c:forEach>
                </ul>
               
            </div><!-- .box -->
        </div><!-- .block -->
         <div class="tc">
            <button type="button" class="mui-btn mui-btn-small" onclick="location.href='index'"><i class="icon icon-home icon12 icon-mr"></i>返回首页</button>
       	 </div><!-- .tc -->
        <div id="footer">
            <p>Copyright &copy; 中国民生银行</p>
        </div><!-- #footer -->
    </body>
</html>
