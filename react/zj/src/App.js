import React, { Component } from 'react';
import { Router, Route, Link,hashHistory } from 'react-router';
import './components/css/reset.css';
import './components/css/zindex.css';
class App extends Component {
    render() {
        return(
            <div>
				{this.props.children}
			<footer>
			<ul className="tabnav">
				<li>
					<Link to="/home">
						<i className="iconfont active">&#xe639;</i>
					<p>外卖</p>
					</Link>
				</li>
				<li>
				<Link to="/find">
					<i className="iconfont">&#xe609;</i>
					<p>发现</p>
					</Link>
				</li>
				<li>
				<Link to="/order">
					<i className="iconfont">&#xe647;</i>
					<p>订单</p>
					</Link>
				</li>
				<li>
				<Link to="/user">
					<i className="iconfont">&#xe604;</i>
					<p>我的</p>
					</Link>
				</li>
			</ul>
		</footer>
			</div>
           
        )
    }
}

    export default App;