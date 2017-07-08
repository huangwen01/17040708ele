import React, { Component } from 'react';
import './css/reset.css';
import './css/swiper.min.css';
import './css/zindex.css';
import axios from 'axios';
import Swiper from 'swiper';
import {Link} from 'react-router';
class Home extends Component {
	constructor(props){
		super(props)
		this.state={
			list:[],
			price:[]
		}
		this.getseller= this.getseller.bind(this);	
	}
    componentDidMount(){
        var mySwiper = new Swiper('.swiper-container',{
			slidesPerColumn : 2,
			slidesPerColumnFill : 'column',
			slidesPerView : 4,
			slidesPerGroup : 4,
			pagination : '.swiper-pagination',
		});
		if(document.getElementsByClassName("font625")[0]){
			document.getElementsByClassName("font625")[0].remove()
		}
		this.getseller()
    }
	getseller(){
		var oSelf = this;
		axios.get('http://localhost:8000/api/indexseller')
		.then(function (response) {
			// var data = JSON.stringify(response.data.data)
			var data = response.data.data;
			// console.log(data)
			oSelf.setState({
				list:data
			})
			console.log(data)
			
		})
		.catch(function (error) {
			console.log(error);
		});
	}
    render() {
        return(
            <div>
                <header className="hindex">
					<input type="text" value=""/>
					<a href="#" className="content">
						<i className="iconfont">&#xe69d;</i>搜索商家、商品名称
					</a>
				</header>
		{/*-----------------------banner图-----------------------------*/}
		
		<section id="banner">
			<div className="swiper-container">
				<div className="swiper-wrapper">
					<div className="swiper-slide">
						<img src="https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>			
						<p><a href="#">美食</a></p>
					</div>
					<div className="swiper-slide">
						<img src="https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />			
						<p><a href="#">美食</a></p>
					</div>
					<div className="swiper-slide">
						<img src="https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />			
						<p><a href="#">美食</a></p>
					</div>
					<div className="swiper-slide">
						<img src="https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />			
						<p><a href="#">美食</a></p>
					</div>
					<div className="swiper-slide">
						<img src="https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />			
						<p><a href="#">美食</a></p>
					</div>
					<div className="swiper-slide">
						<img src="https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />			
						<p><a href="#">美食</a></p>
					</div>
					<div className="swiper-slide">
						<img src="https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/g" />			
						<p><a href="#">美食</a></p>
					</div>
					<div className="swiper-slide">
						<img src="https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />			
						<p><a href="#">美食</a></p>
					</div>
					<div className="swiper-slide">
						<img src="https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />			
						<p><a href="#">美食</a></p>
					</div>
					<div className="swiper-slide">
						<img src="https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />			
						<p><a href="#">美食</a></p>
					</div>
					<div className="swiper-slide">
						<img src="https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />			
						<p><a href="#">美食</a></p>
					</div>
					<div className="swiper-slide">
						<img src="https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />			
						<p><a href="#">美食</a></p>
					</div>
					<div className="swiper-slide">
						<img src="https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />			
						<p><a href="#">美食</a></p>
					</div>
					<div className="swiper-slide">
						<img src="https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />			
						<p><a href="#">美食</a></p>
					</div>
					<div className="swiper-slide">
						<img src="https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />			
						<p><a href="#">美食</a></p>
					</div>
					<div className="swiper-slide">
						<img src="https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/g" />			
						<p><a href="#">美食</a></p>
					</div>
				</div>
				 <div className="swiper-pagination"></div>
			</div>
		</section>
		{/*-----------------------商家活动-----------------------------*/}	
		<section id="activitylist_box">
			<div className="activity">
				<a href="#"><img src="https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/></a>
			</div>
			<div className="actititylist">
				<ul>
					<li>
						<a href="#">
							<div className="left">
							<p>满20减10</p>
							<p>广深大聚惠</p>
						</div>
						<div className="right">
							<img src="https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
						</div>
						</a>
					</li>
					<li>
						<a href="#">
							<div className="left">
							<p>满20减10</p>
							<p>广深大聚惠</p>
						</div>
						<div className="right">
							<img src="https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
						</div>
						</a>
					</li>
					<li>
						<a href="#">
							<div className="left">
							<p>满20减10</p>
							<p>广深大聚惠</p>
						</div>
						<div className="right">
							<img src="https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
						</div>
						</a>
					</li>
					<li>
						<a href="#">
							<div className="left">
							<p>满20减10</p>
							<p>广深大聚惠</p>
						</div>
						<div className="right">
							<img src="https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
						</div>
						</a>
					</li>
				</ul>
			</div>
		</section>
		{/*-----------------------商家推荐-----------------------------*/}
		
		<section id="main">
			<h2 className="recommend_seller">推荐商家</h2>
			<div className="sellerlist">
				<ul>
					{
						
						this.state.list.map((val,key)=>{
							return <li key={key}>
										<a href="#">
											<div className="sel_left">
												<img src={val.img}/>
											</div>
											<div className="sel_right">
												<div className="sellertitle">
													<h3>{val.title}</h3>
												</div>
												<div className="userservice">
													<div className="userstart">
														<i className="iconfont">&#xe643;</i>
														<i className="iconfont">&#xe643;</i>
														<i className="iconfont">&#xe643;</i>
														<i className="iconfont">&#xe643;</i>
														<i className="iconfont">&#xe643;</i>
													</div>
													<div className="servicenum">4.5</div>
													<div className="salesvolume">4.5</div>
												</div>
												<div className="distr">
													<div className="dis_l">￥<span>{val.price.split(",")[0]}</span>起送</div>
													<div className="dis_l">配送费<span>{val.price.split(",")[1]}</span></div>
													<div className="dis_l">￥<span>{val.price.split(",")[2]}/人</span></div>
													<div className="dis_r">
														<span className="distanc">570</span>
														<span className="time">26</span></div>
												</div>
											</div>
											
										</a>
									</li>
						})
						
					}
				</ul>
			</div>
		</section>
    	</div>        
        )
    }
}

export default Home;