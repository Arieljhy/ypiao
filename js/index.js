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
/*轮播图*/
var count = 0 ; //定义全局变量count来表示当前图片


function run(){
    count++;
    count = count ==3?0:count;
    $('.banner img').eq(count).fadeIn(300).siblings('img').fadeOut(300); //利用eq来遍历img，并将count位图片显示，其他兄弟元素隐藏，fadeIN位淡入显示，fadeOut为淡出
    $('.banner ul li').eq(count).css('background','#f40').siblings('li').css('background','#fff'); //同样利用遍历改变圆点的背景色
}
function reverserun(){
    count--;
    count = count == -1?2:count;
    $('.banner img').eq(count).fadeIn(300).siblings('img').fadeOut(300);
    $('.banner ul li').eq(count).css('background','#f40').siblings('li').css('background','#fff');
}
var timer = setInterval(run,2000); //设置定时器
$('.banner').hover(function(){ //设置鼠标移入移出事件
    clearInterval(timer);
    $('.right').fadeIn(200);
    $('.left').fadeIn(200);
},function(){
    timer = setInterval(run,2000);
    $('.right').fadeOut(200);
    $('.left').fadeOut(200);
})
$('.banner ul li').mouseenter(function(){ //设置移入圆点事件
    count = $(this).index();
    count = count ===3?0:count;
    $('.banner img').eq(count).fadeIn(300).siblings('img').fadeOut(300);
    $('.banner ul li').eq(count).css('background','#f40').siblings('li').css('background','#fff');
})
$('.banner .right').click(function(){ //设置右键按钮点击事件
    run();
})
$('.banner .left').click(function(){ //设置左键按钮点击事件
    reverserun();
})
//楼梯导航
//页面加载
window.οnlοad=function(){
    $("#lt-menu").fadeOut("fast");

    $('.right').fadeOut("fast");
    $('.left').fadeOut("fast");
}
//滚动条滚动事件
$(document).scroll(function() {
     t=window.pageYOffset;//获取滚动条距顶部距离
    var top = document.getElementById('lt-b');//获取固定顶栏的操作对象
    if(t>=parseFloat($("#lt-b").css("height"))){
            
            $("#lt-menu").fadeIn("slow");
    }else{ 
           
            $("#lt-menu").fadeOut("slow");//隐藏
         
    }
    });

 //楼梯导航滚动效果
 
 /* 滚动监听 */
      // 定义一个获取所有模块的距离高度
      var arrOffsetTop = [
        $('#louti3').offset().top,
        $('#louti4').offset().top,
        $('#louti5').offset().top,
        $('#louti6').offset().top,
        $('#louti7').offset().top,
        $('#louti8').offset().top    
     ];

     // 获取每个div的平均高度
     var fTotalHgt = 0;
     for(var i=0; i<$('div').length; i++) {
        fTotalHgt += $('div').eq(i).outerHeight();
     }
     var fAverageHgt = parseFloat(fTotalHgt / $('div').length);

     // 滚动事件(每次滚动都做一次循环判断)
     $(window).scroll(function() {
        for(var i=0; i<$('div').length; i++) {
           if($(this).scrollTop() > arrOffsetTop[i] - fAverageHgt) {  // 减去一个固定值，是定位准确点
              $('ul li').eq(i).addClass('active').siblings().removeClass('active');
           }
        }
     });

  /* 点击事件 */
     $('ul li').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        $('body, html').animate({scrollTop: arrOffsetTop[$(this).index()]}, 500);
     });
    





   








