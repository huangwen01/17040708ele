import React, { Component } from 'react';
import './css/find.css';
import axios from 'axios';
import {Link} from 'react-router';
class Find extends Component {
	constructor(props){
		super(props);
		this.state={
			foodlist:[]
		}
		this.foodlist=this.foodlist.bind(this)
	}
	


	foodlist(){
		var oSelf = this;	
		var url = "http://127.0.0.1:8000/api/findfood"
		axios.get(url)
		.then(function (response) {
		oSelf.setState({
				foodlist:response.data.data
			})	
		})
		.catch(function (error) {
			console.log(error);
		});
	}
	componentDidMount(){
		if(document.getElementsByClassName("font625")[0]){
			document.getElementsByClassName("font625")[0].remove()
		}
		this.foodlist();
    }

    render() {
        return(
            <div>
			
                <header>发现</header>
		<section id="marketactivity">
			<div className="activitydetails">
				<div className="details_l">
					<div className="integral">
						<a href="#">
							<div className="content">
								<p>积分商城</p>
								<p>0元好物在这里！</p>
							</div>
							<div className="content_img">
								<img src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/" />
							</div>
						</a>
					</div>
					<div className="flow">
						<a href="#">
							<div className="content">
								<p>免费流量</p>
								<p>每月最高500M</p>
							</div>
							<div className="content_img">
								<img src="https://fuss10.elemecdn.com/e/ff/3b9c4a4dfda1df548dc9274f6a7c1jpeg.jpeg?imageMogr/format/webp/" />
							</div>

						</a>
					</div>
				</div>
				<div className="details_r">
					<div className="detaline">
						<a href="#">
							<div className="content">
								<p>免费流量</p>
								<p>每月最高500M</p>
							</div>
							<div className="content_img">
								<img src="https://fuss10.elemecdn.com/e/ff/3b9c4a4dfda1df548dc9274f6a7c1jpeg.jpeg?imageMogr/format/webp/" />
							</div>

						</a>
					</div>
					<div className="detaline">
						<a href="#">
							<div className="content">
								<p>免费流量</p>
								<p>每月最高500M</p>
							</div>
							<div className="content_img">
								<img src="https://fuss10.elemecdn.com/6/76/8d42eef97ff4c1c2b671085358541jpeg.jpeg?imageMogr/format/webp/" />
							</div>
						</a>
					</div>
					<div className="detaline">
						<a href="#">
							<div className="content">
								<p>免费流量</p>
								<p>每月最高500M</p>
							</div>
							<div className="content_img">
								<img src="https://fuss10.elemecdn.com/6/76/8d42eef97ff4c1c2b671085358541jpeg.jpeg?imageMogr/format/webp/" />
							</div>
						</a>
					</div>
				</div>
			</div>
			<div className="activityshow">
				<a href="#">
					<img src="https://fuss10.elemecdn.com/b/6d/656006edcd86033a1b32b23ddea37jpeg.jpeg?imageMogr/format/webp/" />
				</a>
			</div>
		</section>
		<section id="main">
			<div className="food_list">
				<div className="title">
					<h3>
						<span></span>
						<i className="iconfont">&#xe62b;</i>美食热推
						<span></span>
					</h3>
					<p>你的口味，我都懂得</p>
				</div>
				<div className="showfoods">
					<ul>
						{
						this.state.foodlist.map((value,key)=>{
							return <li key={key}>
										<Link to="/user">
											<img src={value.img}/>
											<div className="fooddesc">{value.title}</div>
											<p className="price">{value.price.split(",")[0]}</p>
										</Link>
									</li>
						})
					}
					</ul>
					<div className="more">
						<a href="#">查看更多  ></a>
					</div>
				</div>
			</div>
			<div className="food_list">
				<div className="title">
					<h3>
						<span></span>
						<i className="iconfont">&#xe798;</i>天天特价
						<span></span>
					</h3>
					<p>特价商品，一网打尽</p>
				</div>
				<div className="showfoods">
					<ul>
						<li>
							<a href="#">
								<img src="https://fuss10.elemecdn.com/5/ee/79392709848185b5b426d1bf310f9jpeg.jpeg?imageMogr/format/webp/" />
								<div className="fooddesc">水晶虾饺</div>
								<p className="price">15</p>
							</a>
						</li>
						<li>
							<a href="#">
								<img src="https://fuss10.elemecdn.com/5/ee/79392709848185b5b426d1bf310f9jpeg.jpeg?imageMogr/format/webp/" />
								<div className="fooddesc">水晶虾饺</div>
								<p className="price">15</p>
							</a>
						</li>
						<li>
							<a href="#">
								<img src="https://fuss10.elemecdn.com/5/ee/79392709848185b5b426d1bf310f9jpeg.jpeg?imageMogr/format/webp/"/>
								<div className="fooddesc">黄焖鸡米饭</div>
								<p className="price">24.9</p>
							</a>
						</li>
					</ul>
					<div className="more">
						<a href="#">查看更多  ></a>
					</div>
				</div>
			</div>
			<div className="food_list">
				<div className="title">
					<h3>
						<span></span>
						<i className="iconfont">&#xe614;</i>限时豪礼
						<span></span>
					</h3>
					<p>小积分换豪礼</p>
				</div>
				<div className="showfoods">
					<ul>
						<li>
							<a href="#">
								<img src="https://fuss10.elemecdn.com/5/ee/79392709848185b5b426d1bf310f9jpeg.jpeg?imageMogr/format/webp/" />
								<div className="fooddesc">水晶虾饺</div>
								<p className="price">15</p>
							</a>
						</li>
						<li>
							<a href="#">
								<img src="https://fuss10.elemecdn.com/5/ee/79392709848185b5b426d1bf310f9jpeg.jpeg?imageMogr/format/webp/" />
								<div className="fooddesc">水晶虾饺</div>
								<p className="price">15</p>
							</a>
						</li>
						<li>
							<a href="#">
								<img src="https://fuss10.elemecdn.com/5/ee/79392709848185b5b426d1bf310f9jpeg.jpeg?imageMogr/format/webp/"/>
								<div className="fooddesc">黄焖鸡米饭</div>
								<p className="price">24.9</p>
							</a>
						</li>
					</ul>
					<div className="more">
						<a href="#">查看更多  ></a>
					</div>
				</div>
			</div>
		</section>
       </div>        
        )
    }
}

export default Find;