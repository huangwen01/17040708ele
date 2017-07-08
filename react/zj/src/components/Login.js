import React, { Component } from 'react';
import './css/login.css';
import axios from 'axios';
import { browserHistory,useRouterHistory} from 'react-router';
// import { createHistory } from 'history';
// const history = createHistory();
class Login extends Component {
	constructor(props){
		super(props)
		this.state={
			username:"",
			password:""
		}
		this.goLogin=this.goLogin.bind(this);
		this.getuserinfo = this.getuserinfo.bind(this)
		this.backgo=this.backgo.bind(this)
	}
     componentDidMount(){
		
    }
	backgo(){
		
		// const history = useRouterHistory(createHistory)({
  		// 	basename: '/base-path'
		// })
		// alert('history')
	}
	getuserinfo(){
		var userinfo = JSON.parse(localStorage.getItem('userinfo'));
		console.log(userinfo)	
		if(userinfo!=null){
			var username=userinfo[0].username;
			var password=userinfo[1].password
			this.setState({
				username:username,
				password:password
			})
		}
	}
	goLogin(){
		var username = this.refs.username.value;
		var password = this.refs.password.value;
		console.log(username);
		console.log(password);
		var url = "http://127.0.0.1:8000/api/doLogin";
		axios.post(url, {
			phone:username,
			password:password
		})
		.then(function (response) {
			console.log(response);
			if(response.data.status==0){
				alert(response.data.msg)
			}else{
				alert(response.data.msg);
				var userinfo = [{username:response.data.phone},{password:response.data.password}];
				localStorage.setItem("userinfo",JSON.stringify(userinfo));
				browserHistory.push('/home');
			}
		})
		.catch(function (error) {
			console.log(error);
		});

	}

    render() {
        return(
            <div>
               <header>
			<a href="#" onClick={this.backgo}>
			
				<i className="iconfont">&#xe600;</i>
			</a>
			密码登录
			<a href="#"></a>
		</header>
		<section id="main">
			<div className="phone">
			
				<input type="text" placeholder="手机号/邮箱/用户名" ref="username" id="username"/>
			</div>
			<div className="password">
				<input type="password" placeholder="密码" ref="password" />
			</div>
			<button id="login" onClick={this.goLogin}>登录</button>
			<p className="forget"><a href="#">忘记密码？</a></p>
		</section>
            </div>        
        )
    }
}

export default Login;