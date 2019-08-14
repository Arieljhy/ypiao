$(function(){
    

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
function iflogin(){
    var search=location.search;
    if(search!=""){
        var obj=searchObj(search);
    }else{
        return -1;
    }  
}

})
