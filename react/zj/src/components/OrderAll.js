import React, { Component } from 'react';
import './css/orders_all.css';
import {Link,browserHistory} from 'react-router';
import axios from 'axios';
class OrderAll extends Component {
    constructor(props){
        super(props);
        this.getOrderAll = this.getOrderAll.bind(this);
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
       this.getOrderAll();
    }

    getOrderAll(){
        axios.get('http://localhost:8000/api/allOrder')
		.then(function (response) {
			console.log(response)	
		})
		.catch(function (error) {
			console.log(error);
		});
    }


    render() {
        return (
            <div>
                 <div className="allheader">
                    <h2><Link to="/order"><i className="iconfont">&#xe600;</i></Link>订单</h2>
                 </div>
                <div className="content">
                    <div className="content_top">
                        <h4>外卖</h4>
                    </div>
                    <div className="content_orders">
                        <ul>

                            <li>
                                <img src="img/hw/orders1.jpg" alt=""/>
                                <h4>舌尖味道<span>订单已完成</span></h4>
                                <span>2017-1-1</span>
                                <p>土豆丝等7件商品<span>￥100块</span></p>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="footer">仅显示近一年外卖订单</div>
            < /div>        
        )
    }
}

export default OrderAll;