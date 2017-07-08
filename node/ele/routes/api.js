var express = require('express');
var router = express.Router();
var DB = require('../model/db');
var bodyParser = require('body-parser');
var md5 = require('md5');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
var session = require('express-session');
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

router.get('/login', function(req, res, next) {
    res.send('login')
});
router.post('/doLogin', function(req, res, next) {
    var phone = req.body.phone;
    var password = md5(req.body.password);
    DB.Find("user",{phone,password},function(err,data){
        if(err){
            res.json({'msg':"用户名或者密码错误","status":"0"})
        }else{
            console.log(data)
            if(data.length<1){
                res.json({'msg':"用户名或者密码错误","status":"0"})
            }else if(data.length==1){
                res.json({'msg':"登录成功","status":"1","phone":data[0].phone,"password":data[0].password})
            }
        }
    })
});
var userid=""
var phone = ""
router.post('/doReg1', function(req, res, next) {
    Rphone = req.body.getphone;
    var longstr = '1,2,3,4,5,6,7,8,9,0,A,B,C,D,E,F,G,H,I,G,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z';
    var str = longstr.split(',');
    var prevNum = '';
    for(var i = 0; i < 6; i++) {
        prevNum += str[Math.floor(Math.random() * 36)];
    }
    DB.Find("user",{phone},function(err,data){
        if(err){
            console('error');
        }else {
            phone=Rphone
            if(data==""){
                res.json({'msg':"手机号可用","status":"1","prevNum":prevNum})
            }else{
                res.json({'msg':"手机号已被注册","status":"0"})
            }
        }
    })

})

router.post('/doReg2', function(req, res, next) {
    var password=md5(req.body.password);
    DB.Insert("user",{phone,password},function(err,data){
        if(err){
            res.json({'msg':"注册失败","status":"0"})
        }else{
                res.json({'msg':"注册成功","status":"1"})
            }
    })
});

router.get('/indexseller', function(req, res, next) {
    console.log(req)
    DB.findMore('trade',{},0,10,function(err,data){
        if(err){
            console.log(err);
            return
        }
        console.log(data)
        res.json({"status":"0",data:data})
    })
});

router.get("/index",function(req,res,next){
    DB.Find("trade",{},function(err,data){
        res.json({data})
    })
})//主页api
router.get("/seller",function(req,res,next){
    var id=req.query.id;
    DB.FindId("orders",id,function(err,data){
        res.json({data})
    })
})//sellerapi
//收藏





module.exports = router;
