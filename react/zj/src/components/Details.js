import React, { Component } from 'react';
import './css/orders.css';
import {Link,browserHistory} from 'react-router';
import axios from 'axios';
class Details extends Component {
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
                
            </div>
        )
    }
}

export default Details;