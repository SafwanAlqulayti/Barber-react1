import React, { Component } from 'react';
import Services from './Services'
import './Home.css'
import Proceess from './Process';
import About from './About';
import HeairCut from './HeairCut';


class Home extends Component {


    
    render() {
        return (
  <div>
            <header className="masthead">
                
               
            <div className="container">
            
              <div className="intro-text img/header-bg.jpg">
                <div className="intro-lead-in">Welcome To Our Barbar Shops!
                </div>
                <div className="intro-heading text-uppercase">It's Nice To Meet You</div>
                <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#about">Tell Me More</a>
              </div>
            </div>
          </header>
          <Services/>
          <Proceess/>
          <About/>
          {this.props.cut.map((c)=>(
            <HeairCut  name={c.title} price={c.price} des={c.description} ></HeairCut>

          )) }
          
          
          </div>
          
        )}}



export default Home;