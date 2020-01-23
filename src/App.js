import React ,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'; 
import './custom.css';
import './App.css';


import Nav from './Nav'
import Home from './Home';
 


  class App extends Component {

   render(){
 
    // var prePath = "/Barber-react";
      

  return (
    <Router>
     
    <div className="App" id="nav1">

 
  <Nav></Nav> 
 
      <div>
    
     {/* <Route path="/Addproduct" component={Addproduct} > <Addproduct  ></Addproduct> </Route> */}

      </div>
      
      
    
            </div>
            </Router>
  )}
        }  
        
   export default App ;
