const mysql = require('mysql');
const express = require('express');
var pool = mysql.createPool({
   host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'jihongyu',
    database:'ypiao',
    connectionLimit:20
});
module.exports = pool;