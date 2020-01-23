import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import './App.css';
import Products from './Products';
class Branches extends Component {

   
  render () {
    const style = {
      width: '500px',
      height: '300px' 
       
    }
   
    return (
   
      <div className="bg-light page-section">
      <div id="test" >
         <h1 >Tahlih Branch</h1>
         <h3>Working Hours</h3>
         <span>Mon-Fri    8-12am     4-8pm</span>
         </div>
   <div class="services1" id="Branches" >
 
 <div class="services-left">
   <ul>
     <li> 
       <div class="cut-heair">
         <span calss="span-left">
           MALE CUT 
         </span>
         <span>
           20$
         </span>
       </div>
     </li>
     <li> 
       <div class="cut-heair">
         <span>
           KID CUT
         </span>
         <span>
           10$
         </span>
       </div>
     </li>
     <li> 
       <div class="cut-heair">
         <span>
           BEARD CUT
         </span>
         <span>
           15$
         </span>
       </div>
     </li>
     <li> 
       <div class="cut-heair">
         <span>
          WAX
         </span>
         <span>
           17$
         </span>
       </div>
     </li><li> 
       <div class="cut-heair">
         <span>
           FACIAL
         </span>
         <span>
           12$
         </span>
       </div>
     </li><li> 
       <div class="cut-heair">
         <span>
           Male Cut
         </span>
         <span>
           8$
         </span>
       </div>
     </li>
   </ul>
 </div>


 <div className="services-right">

 <Map google={this.props.google} zoom={14}   
       style={style}
      initialCenter={{
        lat: 7.854885,
        lng: -88.081807
      }}>
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} style={style} />

 <InfoWindow onClose={this.onInfoWindowClose} style={style}>
 
 </InfoWindow>
</Map>
 </div>
 </div>
 
  
 
  </div>
 
    
  );
}
 }
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBUXuSM7TeowjHTgqZWSM8MG5CaX8epWdM")//real key needed
})(Branches);