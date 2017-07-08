import React, { Component } from 'react';
import './css/orders.css';
import {Link,browserHistory} from 'react-router';
import axios from 'axios';
class Order extends Component {
    constructor(props){
        super(props)
        this.showdiv= this.showdiv.bind(this);
        this.getorder = this.getorder.bind(this);
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

       this.showdiv();
    }
    showdiv(){
        var userinfo = JSON.parse(localStorage.getItem('userinfo'));
        console.log(userinfo)
        if(userinfo==null){
             this.refs.logincontent.style.display="none";
             this.refs.nologcontent.style.display="block";
        }else{
            this.refs.logincontent.style.display="block";
            this.refs.nologcontent.style.display="none";
           
        }
    }

    getorder(){
        browserHistory.push('/order/orderall');
       
    }
    render() {
        return (
            <div>
            <div className="oheader" >
                <h2 className="tit">订单</h2>
            < /div>
            {/*-------------------------------------------未登录是订单显示------------------------*/}
            < div className="no_log_content" ref="nologcontent">
                <img src="//fuss10.elemecdn.com/6/87/4efda8c6bf4734d39faf86fe190c3gif.gif" alt= ""/> <br/>
                <span>登录后查看外卖订单</span><br/>
                <button><Link to="/user/login">立即登录</Link></button>
            < /div>
            {/*-------------------------------------------登录后的状态------------------------*/}
            < div className="login_content" ref="logincontent">
                <div className="orders_top" >
                    <h4>我的订单 <span onClick={this.getorder}> 全部订单</span></h4>
                         <div className="record" >
                                 <img src="//fuss10.elemecdn.com/6/87/4efda8c6bf4734d39faf86fe190c3gif.gif" alt= "" />
                                 <h3>近三个月无外卖订单记录 < /h3>
                                 <p onClick={this.getorder}>查看三个月前的外卖订单< /p>
                          < /div>
                < /div>
                < div className="orders_center" >
                     <h4>附近买过 < /h4>
                     < div className="seller" >
                     <img src="./img/hw/seller.jpg" alt= "" />
                    <h3>附近暂无买过的商家 < /h3>
                     < p >配送范围内买过的商家会出现在这里< /p>
                < /div>
            < /div>
       < /div>
     < /div>        
        )
    }
}

export default Order;