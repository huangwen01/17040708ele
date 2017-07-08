import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {browserHistory,Router, Route, Link,IndexRoute } from 'react-router';
import Home from './components/Home.js';
import Find from './components/Find.js';
import Order from './components/Order.js';
import User from './components/User.js';
import Login from './components/Login.js';
import Reg from './components/Reg.js';
import Reg1 from './components/Reg1.js';
import Reg2 from './components/Reg2.js';
import OrderAll from './components/OrderAll.js';
ReactDOM.render( 
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="home" component={Home}/>
      <Route path="find" component={Find} />
      <Route path="order" component={Order} />
      <Route path="order/orderall" component={OrderAll} />
      <Route path="user" component={User}></Route>
      <Route path="user/login" component={Login} />
      <Route path="user/reg" component={Reg} />
      <Route path="user/reg1" component={Reg1} />
      <Route path="user/reg2" component={Reg2} />
    </Route>
  </Router>,
    document.getElementById('root'));
registerServiceWorker();