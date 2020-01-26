import React, {Component} from 'react';
import Products from './Products';
import Home from './Home';
import db from './Db';
import Branches from './Branches';

import Reservision from './Reservision';
 import Appointment from './Appointment';
import AddProduct from './Addproduct';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'; 

class Nav extends Component {
  render () {
    
    var prePath = "/Barber-react";
    return (
 
      <Router>
         <nav>
     <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">Barber</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item"  >
              <a className="nav-link js-scroll-trigger"  href="/"><Link className="nav-link" to={prePath + "/Appointment"}> Appointment</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="/"><Link className="nav-link" to={prePath + "/Branches"}> Branches</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="/"><Link className="nav-link" to={prePath + "/Reservision"}> Reservision</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="/"><Link className="nav-link" to={ "/Barber-react"}> Home</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="/"><Link className="nav-link" to={prePath + "/products"}>products</Link> </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
     </nav>
     <Route exact path="/Barber-react"  ><Home cut={db}></Home></Route>
      <Route  path="/products" component={Products} />  
      <Route  path="/Branches" component={Branches} />
     <Route path="/Reservision" component={Reservision}> <Reservision></Reservision></Route>
     <Route path="/Appointment" component={Appointment} ></Route>
    </Router>
   
    )}}

export default Nav;