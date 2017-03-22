
var LM = {
    alert: {}
}
LM.alert.Wechat = function(t){
    var t = t || '已收藏'
    $('#alertWechat,#alertLoading').remove();
    clearTimeout(LM.alert.Time);
    var alertWechat = '<div id="alertWechat" style=" position:fixed;left:50%;top:45%;transform:translate(-50%,-50%);text-align:center"><span style="background-color:rgba(0,0,0,.6);padding:10px 15px;min-width:100px;color:#fff;border-radius:10px; box-shadow:0 0 10px rgba(0,0,0,.6);display:inline-block;">'+t+'</span></div>'
    $('body').append(alertWechat);
    LM.alert.Time = setTimeout(function(){
        $('#alertWechat').fadeOut(500)
    }, 1500)
}
var Load = {
	alert : {}
}
Load.alert.Loading = function(x){
	var x = x || '努力加载中';
	$('#alertLoading,#alertWechat').remove();
	clearTimeout(Load.alert.Time);
	var alertLoading = '<div id="alertLoading" style="padding:1rem .5rem .5rem;background:rgba(0,0,0,.6);position: fixed;top: 45%;left: 50%;transform: translate(-50%,-50%);border-radius: 1rem;"><div style="width:2.75rem;height: 2.75rem;margin: 0 auto;background: url(img/loading.gif) no-repeat;background-size: 100% 100%;"></div><p style="margin: .5rem auto .2rem;text-align: center;color: #fff;font-size: 1rem;">'+x+'</p></div>';
	$('body').append(alertLoading);
	Load.alert.Time = setTimeout(function(){
		$('#alertLoading').fadeOut(500)
	},1500);
}
function isIdcard(Idcard){
	var searchStr = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
    if (!searchStr.test(Idcard)) {
       	return false;
    }else{
    	return true;
    }
};
function isMobile(mobile) {
    var searchStr = /^(1+\d{10})$/;
    if (!searchStr.test(mobile)) {
        return false;
    }
    return true;
}
function isName(Name){
	var searchStr = /^[\u4e00-\u9fa5]{2,}$/;
	if (!searchStr.test(Name)) {
       	return false;
    }else{
    	return true;
    }  
};
	var countdown = 60;
	function settime(obj) {
		if(countdown == 0) {
		obj.removeAttribute('disabled'); 
		obj.value = "获取验证码";
		countdown = 60;
		return;
		} else {
			obj.setAttribute("disabled", "disabled");
			obj.value = countdown + "秒后重试";
			countdown--;
		}
			setTimeout(function() {
				settime(obj)
			}, 1000)
	};
