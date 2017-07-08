import React, { Component } from 'react';
import './css/reg2.css';
import axios from 'axios';
import { browserHistory } from 'react-router'
class Reg2 extends Component {
    constructor(props){
		super(props)
	this.state={

	}
	this.setPwd= this.setPwd.bind(this);
}
	setPwd(){
		var password=this.refs.password.value;
		var prevpwd = this.refs.prevpassword.value;
		if(!( /^[0-9a-zA-Z_]{6,}$/.test(password))){
			alert("密码由字母数字下划线组成，且长度不低于六位")
		}else if(password!==prevpwd){
			alert("密码与确认密码必须保持一致")
		}else{
			var api = "http://127.0.0.1:8000/api/doReg2"
			axios.post(api,{
					password
				})
				.then(function (response) {
					if(response.data.status==0){
						alert(response.data.msg)
					}else{
						alert(response.data.msg);
						browserHistory.push('/user');
					}
				})
				.catch(function (error) {
					console.log(error)
				})

		}
}
	render(){
		return(
			<div>
				<header>
					<a href="#">
						<i className="iconfont">&#xe600;</i>
					</a>
					注册
					<a href="#"></a>
				</header>
				<section id="main">
					<p className="setinfo">设置登录密码后，可以使用手机号+密码登录，请牢记</p>
					<div className="setpassword">
						<input type="password" placeholder="密码" className="password" ref="password"/>
					</div>	
					<div className="prevpwd">
						<input type="password" placeholder="确认密码" className="prevpassword" ref="prevpassword"/>
					</div>
					<p className="passlength">密码长度6-20个字符</p>
					<button id="login" onClick={this.setPwd}>确定</button>
				</section>
			</div>
		)
	}
}

export default Reg2;