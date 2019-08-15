$(function(){
    //判断是否成功登录
function iflogin(){
    var userInfo = window.sessionStorage.userInfo;
    console.log("111"+userInfo);
    var user = userInfo==undefined?userInfo:JSON.parse(userInfo);
    
        if(user!=undefined){
            $(".wd-dz").css("display","none")
            $(".su-wd").css("display","block")
            $(".wd-name").text(`${user.uname}`)
            $(".wd-tx").attr("src",`${user.avatar}`)
        }else{
            $(".wd-dz").css("display","block")
            $(".su-wd").css("display","none")    
        }
     }
iflogin();
$(".logout").click(function(){
    window.sessionStorage.clear();
    window.location.href="/index.html";
});
//////////////////////////////////////////////////样式js
/*城市列表的隐藏与显示*/
$('.hed-cshi').hover(function(){
    $('.chengshi').show()
},function(){
    $('.chengshi').hide()
});
$('.chenshi').hover(function(){
    $('.chengshi').show()
},function(){
    $('.chengshi').hide()
});
/*全部演出*/

$('.dh-fl').hover(function(){
    $('.dh-xl').show()
},function(){
    $('.dh-xl').hide()
});

/*下载*/

$('.ul-xz').hover(function(){
    $('.xz-xl').show()
},function(){
    $('.xz-xl').hide()
});
//////////////////////判断用户是否登录
function searchObj(str){
    var str=str.slice(1); 
        var obj={};
        var arr = str.split();
        for(var s of arr){
            [key,value]=s.split();
            if(obj[key]==undefined){
                obj[key]=value;
            }else{
                obj[key]=[].concat(obj[key],value);
            }
        }
    return obj;
    
}
//https://blog.csdn.net/weixin_34419326/article/details/85862951 history API


})
