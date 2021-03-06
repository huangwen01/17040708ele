import React, { Component } from 'react';
import './css/reg1.css'
class Reg1 extends Component {
     componentDidMount(){
		if(document.getElementsByClassName("font625")[0]){
			document.getElementsByClassName("font625")[0].remove()
		}
    }
    render() {
        return(
            <div>
               <header>
			<a href="#">
				<i class="iconfont">&#xe600;</i>
			</a>
			注册
			<a href="#">密码登录</a>
		</header>
		<section id="main">
			<div class="prevnum">
				<input type="text" placeholder="验证码"/><span class="time">60S</span>
			</div>
			<div class="prompt">
				温馨提示：验证码已发送到<span>XXXXX</span>手机,输入验证码点击下一步完成注册
			</div>
			<button id="nextstep">下一步</button>
		</section>
		<section id="thirdlogin">
			<h5></h5>
			<div class="loginchannel">
				<ul>
					<li>
						<a href="#">
							<i class="iconfont">&#xe66d;</i>
							<p>微信</p>
						</a>	
					</li>
					<li>
						<a href="#">
							<i class="iconfont">&#xe67e;</i>
							<p>QQ</p>
						</a>	
					</li>
					<li>
						<a href="#">
							<i class="iconfont">&#xe668;</i>
							<p>微博</p>
						</a>	
					</li>
					<li>
						<a href="#">
							<i class="iconfont">&#xe601;</i>
							<p>淘宝</p>
						</a>	
					</li>
				</ul>
			</div>
		</section>
            </div>        
        )
    }
}

export default Reg1;