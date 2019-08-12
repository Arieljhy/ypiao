const express = require('express');
const pool = require('../../pool.js');
var router = express.Router();

// 测试接口
router.get('/text/:uid',(req,res)=>{
    var $uid= req.params.uid;
    console.log($uid);
    var sql="select * from yp_user where uid=?";
    pool.query(sql,[$uid],(err,result)=>{console.log(result);
        if(result.length>0){
            res.send("1");
        }
        else{
            res.send("0");
        }
    });
});
// 登录
router.post('/login',(req,res)=>{
    var $phone = req.body.phone;
    var $upwd = req.body.upwd;
    console.log(`${$phone}和${$upwd}`);
    var sql="select * from yp_user where phone=? and upwd=?";
    pool.query(sql,[$phone,$upwd],function(err,result){
        if(result.length>0){
            res.send("{message:1}");
        }
        else{
            res.send("{message:1}");
        }
    });
});
// 注册
router.put('/reg',(req,res)=>{
    var $uid = req.body.uid;
    var $uname = req.body.uname;
    var $upwd = req.body.upwd;
    var $phone = req.body.phone;
    var $email = req.body.email;
    var $user_name = req.body.user_name;
    var $gender = req.body.gender;

    var sql="insert into yp_user (uname,upwd,phone,email,user_name,gender) values (?,?,?,?,?,?)";
    pool.query(sql,[$uname,$upwd,$phone,$email,$user_name,$gender],(err,result)=>{
        if(result.affectedRows>0){
            res.send("1");
        }
        else{
            res.send("0");
        }
    });
});
//修改用户信息
router.put('/update_user',(req,res)=>{
    var $uid = req.body.uid;
    var $uname = req.body.uname;
    var $upwd = req.body.upwd;
    var $phone = req.body.phone;
    var $email = req.body.email;
    var $user_name = req.body.user_name;
    var $gender = req.body.gender;

    var sql="update yp_user set uname=?,upwd=?,phone=?,email=?,user_name=?,gender=? where uid=?";
    pool.query(sql,[$uname,$upwd,$phone,$email,$user_name,$gender,$uid],(err,result)=>{
        if(result.affectedRows>0){
            res.send("{message:1}");
        }
        else{
            res.send("{message:0}");
        }
    });
});
module.exports=router;








