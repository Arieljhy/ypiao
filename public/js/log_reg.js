$(function(){
  //在页面初始化时验证是否记住了用户名和密码
  if($.cookie("rememberUser") == "true") { //"rememberUser"是记住密码选择框的id名
		$("#rememberUser").attr("checked", true); 
		$("#phone").val($.cookie("phone"));
		$("#upwd").val($.cookie("upwd"));
	} 
  //判断是否敲击了Enter键 
$(document).keyup(function(event){ 
  if(event.keyCode ==13){ 
    $("#login_btn").trigger("click"); 
  } 
});
  $("#login_btn").click(function(){ 
    var phone = $(".dz-ipu-sj").val();//取值
    var upwd = $(".dz-ipu-mima").val();
    if(!phone){
        alert("用户名不能为空");
            $(".dz-ipu-sj").focus();//获取焦点
            return ;
    }
    if(!upwd){
        alert("密码不能为空");
            $(".dz-ipu-mima").focus();//获取焦点
            return ;
    }
  //发送ajax请求 使用post方式发送json字符串给后台login
  var param = {phone:phone,upwd:upwd};
  console.log(param); 
  $.ajax({
    type: "post",
    url: "/user/login",
    dataType: "json",
    data:param,
    success: function(data){
    //接受返回的数据，前端判断采取的动作
    console.log(data);

      if(data){
        if(data==="-1"){
          alert('密码错误，请重新输入');
          window.location.href="/login.html"; 
        }else{
          
          alert('登陆成功');
          window.location.href="/index.html?uid="+data.uid;    
        }
      }
    }  
    });
  });
})