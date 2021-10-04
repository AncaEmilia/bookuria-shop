import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Terms from './pages/Terms';
import Cart from './pages/Cart'
import Page404 from './pages/Page404';
import Category from './pages/Category';
import Product from './pages/Product';

import './App.css';


class App extends React.Component {
  constructor(){
    super();
    this.state={};
  }
  
  render() {
    return(
      <div>
        <Switch>
          <Route path='/login' component={Login}/>
            <Route exact path='/' component={Home}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/about' component={About}/>
            <Route path='/terms-and-conditions' component={Terms}/>
            <Route path='/category/:categoryName' component={Category}/>    
            <Route path='/product/:productId' component={Product}/>
            <Route path='*' component={Page404}/>
        </Switch>
      </div>
    )
  }
  
}

export default (App);