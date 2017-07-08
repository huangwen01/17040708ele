import React, { Component } from 'react';
import './css/user.css';
import {Link} from 'react-router';
class User extends Component {

    constructor(props){
        super(props)
        this.userstatus = this.userstatus.bind(this);
        this.state={
            username:"",
            userphone:""
        }
    }
    componentDidMount(){
       var head=document.getElementsByTagName("head");
       
       var style=document.createElement("style");

       var str=`
       html{
            font-size:625%;
        }
        body{
            font-size:0.12rem;
            background: #f5f5f5;
        }

        footer{
            width: 100%;
            height:.495rem;
            border-top: 0.01rem solid #c8c8c8;
            background: #fff;
            position: fixed;
            bottom: 0;
            left: 0;
        }
        footer>.tabnav{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-content: center;
        }
        footer>.tabnav>li{
            text-align: center;
            width: 25%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
        }
        footer>.tabnav>li i{
            font-size: .24rem;
            color: #6b6b6b
        }
        footer>.tabnav>li .active{
            color: #3190e9;
        }`
       style.innerHTML=str;
       style.className="font625"
       head[0].appendChild(style);
       this.userstatus();
    }

    userstatus(){
         var userinfo = JSON.parse(localStorage.getItem('userinfo'));
        console.log(userinfo)
        if(userinfo!=null){
            var usernames=userinfo[0].username;
            var lastnum = usernames.substring(6,11);
            var replaceinfo = usernames.replace(lastnum,"*****")
        }
        if(userinfo==null){
             this.refs.nologin.style.display="block";
             this.refs.logined.style.display="none";
        }else{
            this.refs.nologin.style.display="none";
            this.refs.logined.style.display="block";
            this.setState({
                username:replaceinfo     
            })
        }
    }
    render() {
        return(
            <div>
                <div className="u_header">
    <h2>我的
        <i className="iconfont">&#xe77e;</i>
        <i className="iconfont">&#xe65a;</i>
    </h2>
</div>
<div className="user_info">
    <i className="iconfont">&#xe74d;</i>
{/*-----------------------未登录状态-----------------------------*/}

    <div className="nologin" ref="nologin">
        <h4><Link to="user/login">立即登录</Link>/<Link to="user/reg">注册</Link></h4>
        <p>登录后享更多特权</p>
        <i className="iconfont">&#xec6e;</i>
    </div>
    {/*-----------------------登录后状态-----------------------------*/}
    <div className="logined" ref="logined">
        <h4>xxxxx</h4>
        <p>{this.state.username}</p>
        <i className="iconfont">&#xec6e;</i>
    </div>
</div>

    {/*-----------------------未登录的nav-----------------------------*/}
<div className="nonav">
    <ul>
        <li>
            <i className="iconfont">&#xe615;</i>
            <span>钱包</span>
        </li>
        <li>
            <i className="iconfont">&#xe606;</i>
            <span>优惠</span>
        </li>
        <li>
            <i className="iconfont">&#xe644;</i>
            <span>积分</span>
        </li>
    </ul>
</div>
    {/*-----------------------已登录的nav-----------------------------*/}
<div className="naved">
    <ul>
        <li>
            <i className="iconfont">0.00元</i>
            <span>钱包</span>
        </li>
        <li>
            <i className="iconfont">0个</i>
            <span>优惠</span>
        </li>
        <li>
            <i className="iconfont">0分</i>
            <span>积分</span>
        </li>
    </ul>
</div>

    {/*-----------------------地址和收藏-----------------------------*/}
<div className="address">
    <ul>
        <li>
            <i className="iconfont">&#xe637;</i>
            <a>收货地址</a>
        </li>
        <li>
            <i className="iconfont">&#xe68d;</i>
            <a>我的收藏</a>
        </li>
    </ul>
</div>
<div className="ele">
    <ul>
        <li>
            <i className="iconfont">&#xe681;</i>
            <a>推荐有奖</a>
        </li>
        <li>
            <i className="iconfont">&#xe681;</i>
            <a>积分商城</a>
        </li>
        <li>
            <i className="iconfont">&#xe605;</i>
            <a>饿了么会员卡</a>
        </li>
    </ul>
</div>
            </div>        
        )
    }
}

export default User;