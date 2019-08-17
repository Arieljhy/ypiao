$(function(){
  
   // 登录时，如果记录的有数据就直接填充
   $("#phone").value=window.sessionStorage.getItem('phone');
   $("#upwd").value=window.sessionStorage.getItem('upwd');
   $("input#phone").focus();
  //判断是否敲击了Enter键 
$(document).keyup(function(e){ 
  if(e.keyCode == 13){ 
    $("#login_btn").trigger("click"); 
  } 
})
$(document).keyup(function(e){
  if(e.keyCode==9){
      if($("input#phone").focus()){
        $("input#phone").blur()
        $("input#upwd").focus()
        return;
      }
      if($("input#upwd").focus()){
        $("input#upwd").blur()
        $("input#phone").focus() 
        return;
      }
  }
})
/////////////////////////////////////////////////////登录
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
      if(data){
        if(data==="-1"){
          alert('密码错误，请重新输入');
          window.location.href="/login.html"; 
        }else{   
          //https://www.cnblogs.com/chris-oil/p/9461760.html 
          let str=JSON.stringify(data); 
          window.sessionStorage.userInfo=str;
          
          alert('登陆成功');
          window.location.href="/index.html";    
        }
      }
    }  
    });
  })
///////////////////////////////////////////////////////注册
//////////////////注册页面 各种用户输入  的验证
function check_password() {
  if ($("#upwd").val() != $("#cupwd").val()){
    $("#phone+span").html("请保证两次输入密码的一致性！").show();
    $("#cupwd").focus();
  }
}


$("#phone").keyup(function(){
  var phone = $(this).val()
  var reg= /^1[34578]\d{9}$/
  if(reg.test(phone)){
    $("#phone+span").hide() 
    $("#phone+span").parent().addClass("on")
  }
  if(!reg.test(phone)){
    $("#phone+span").html("<i class='iconfont' style='color:red'>&#xe607;</i>输入手机号...").show()
    $("#phone+span").parent().removeClass("on")
  }
})
$("#phone").blur(function(){    
             var phone = $(this).val()
            var reg = /^1[34578]\d{9}$/
              if(phone=="" || phone==null){
                $("#phone+span").html("用户名不能为空").show();
                $("#phone+span").parent().removeClass("on");
                $("#phone").focus();
              }
            else if (!reg.test($("#phone").val())){
              $("#phone+span").html("请输入正确的手机号").show();
              $("#phone+span").parent().removeClass("on");
              $("#phone").focus();
            }
            else{
              $("#phone+span").hide();
              $("#phone+span").parent().addClass("on");
            }
});

$("#email").focus(function() {
  var reg = /\w+[@]{1}\w+[.]\w+/;
  if (!reg.test($("#email").val())){
    $("#email+span").html("请输入正确的email！");
    $("#email").focus();
  }
}).blur(function(){
              $("#emails").empty();
               var mail = $(this).val();
               if(mail==""|| mail==null){
                  $("#email+sapn").html("邮箱不能为空");
                  $("#email").empty(); 
               }
});



$("#upwd").keyup(function(){
  var upwd = $(this).val()
  var reg= /^([A-Z]|[a-z]|[0-9]){6,15}$/
  if(reg.test(upwd)){
    $("#upwd+span").hide() 
    $("#upwd+span").parent().addClass("on")
  }
  if(!reg.test(upwd)){
    $("#upwd+span").html("<i class='iconfont' style='color:red'>&#xe607;</i>6-15位 数字 或 字母 或 两者的组合...").show()
    $("#upwd+span").parent().removeClass("on")
  }
})
$("#upwd").blur(function(){ 
              var upwd = $(this).val();
              var reg= /^([A-Z]|[a-z]|[0-9]){6,15}$/
              //var reg= /^(?![^a-zA-Z]+$)(?!\D+$)(?![^_]+$).{6,15}$/;//6=15位数字 或 字母 或 下划线 的组合
              if(upwd==""|| upwd==null){
                  $("#upwd+span").parent().removeClass("on")
                  $("#upwd+span").html("密码不能为空").show()
                  
              }
               else if(!reg.test($("#upwd").val())){
                $("#upwd+span").parent().removeClass("on")
                $("#upwd+span").html("密码格式不正确").show()
                $("#upwd").empty()
                
              }else{
                $("#upwd+span").hide()
                $("#upwd+span").parent().addClass("on")
              }
              
})
$("#cupwd").keyup(function(){
  var cupwd = $(this).val();
  var upwd=$("#upwd").val();
  if(cupwd===upwd){
    $("#cupwd+span").hide() 
    $("#cupwd+span").parent().addClass("on")
  }
  if(cupwd!=upwd){
    $("#cupwd+span").html("<i class='iconfont' style='color:red'>&#xe607;</i>再次输入密码中...").show()
    $("#cupwd+span").parent().removeClass("on")
  }
})
$("#cupwd").blur(function(){
              var cupwd = $(this).val()
              var upwd=$("#upwd").val()
              if(cupwd==""||cupwd==null){
                  $("#cupwd+span").parent().removeClass("on")
                  $("#cupwd+span").html("请重复输入密码").show()
              }
              else if(cupwd!=upwd){
                  $("#cupwd+span").parent().removeClass("on")
                  $("#cupwd+span").html("两次密码输入不一致").show()    
              }else{
                  $("#cupwd+span").hide()
                  $("#cupwd+span").parent().addClass("on")
              }
})

  




//////////////////注册的   ajax
//初始化验证码
var veCode = drawPic();
    $("#reflashCode").click (function (e) {
        e.preventDefault();
        veCode = drawPic();
    })
//下面就是判断是否==的代码，无需解释
$("#reg_btn").click(function() {
  var oValue = $(".dz-ipu.dz-ipu-yzm-l").val().toUpperCase();
          if(oValue ==""){
            $(".yzm-msg").html("请输入验证码").show();
          }else if(oValue != veCode){
            $(".yzm-msg").html("验证码不正确，请重新输入").show();
              oValue = "";
              veCode = drawPic();
          }else{
                  $(".yzm-msg").html("验证码正确").show();
                 
              }
});
$("#reg_btn").on("reg",function(){ 
  var phone = $(".dz-zc .dz-ipu-sj").val();//取值
  var upwd = $(".dz-zc .dz-ipu-mima").val();
  var user_name = $(".dz-zc .nickname").val();//取值
  var gender = $(".dz-zc .nickname .gender input:checked").val();
  
//发送ajax请求 使用post方式发送json字符串给后台login
var param = {phone:phone,upwd:upwd,user_name:user_name,gender:gender};
console.log(param); 
$.ajax({
  type: "post",
  url: "/user/register",
  dataType: "json",
  data:param,
  success: function(data){
  //接受返回的数据，前端判断采取的动作
    if(data){
      if(data==="-1"){
        alert('注册失败');
        window.location.href="/register.html"; 
      }else{      
        alert('注册成功');
        window.location.href="/login.html";    
      }
    }
  }  
  });
})


})
