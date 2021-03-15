import React, { Component } from 'react'
import Slider from "react-slick";
import './css/team.css';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import  Kaviya from './images/20MCR033.jpeg';
import Eraj from './images/20MCR019.jpeg';
import Bakiya from './images/20MCR009.jpeg'
import Abhitha from './images/20MCR002.jpeg'
import Kavin from './images/20MCR030.jpeg';
import Dinesh from './images/20MCR016.jfif';
import Gokul from './images/20MCA021.jpeg';
import Jeeva from './images/jeeva.jpeg'


export class team extends Component {
     render() {
          var settings = {
               dots: true,
               infinite: false,
               speed: 500,
               slidesToShow: 4,
               slidesToScroll: 4,
               initialSlide: 0,
               responsive: [
                 {
                   breakpoint: 1024,
                   settings: {
                     slidesToShow: 3,
                     slidesToScroll: 3,
                     infinite: true,
                     dots: true
                   }
                 },
                 {
                   breakpoint: 600,
                   settings: {
                     slidesToShow: 2,
                     slidesToScroll: 2,
                     initialSlide: 2
                   }
                 },
                 {
                   breakpoint: 480,
                   settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1
                   }
                 }
               ]
             };
          return (
          
          <div className="container">
               <div className="title pt-5 text-center pb-5">
                    <h1>Our team</h1>
               </div>
              <Slider {...settings}>                         
                              <div className="card-wrapper">
                                   <div className="card-img">
                                   <img src="https://instagram.fmaa2-1.fna.fbcdn.net/v/t51.2885-15/e35/95260778_248881653151260_3280833585558525091_n.jpg?tp=1&_nc_ht=instagram.fmaa2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=W2cRJ-TppgwAX-PSpkW&oh=0e9ece1a61befb384d24fbbda9852f0b&oe=606C315C"/>
                                   </div>   
                                   <div className="details">
                                        <h5>Manikandaraja</h5>
                                   </div>                
                              </div>
                              <div className="card-wrapper">
                                   <div className="card-img">
                                   <img src={Kaviya}/>
                                   </div>   
                                   <div className="details">
                                        <h5>Kaviya</h5>
                                   </div>                
                              </div>
                              <div className="card-wrapper">
                                   <div className="card-img">
                                   <img src={Eraj}/>
                                   </div>   
                                   <div className="details">
                                        <h5>Eraj</h5>
                                   </div>                
                              </div>
                              <div className="card-wrapper">
                              <div className="card-img">
                              <img src={Abhitha}/>
                              </div>   
                              <div className="details">
                                   <h5>Eraj</h5>
                              </div>                
                         </div>
                         <div className="card-wrapper">
                              <div className="card-img">
                              <img src={Bakiya}/>
                              </div>   
                              <div className="details">
                                   <h5>Bakiya</h5>
                              </div>                
                         </div>
                         <div className="card-wrapper">
                         <div className="card-img">
                         <img src={Kavin}/>
                         </div>   
                         <div className="details">
                              <h5>Kavin</h5>
                         </div>                
                    </div>
                    <div className="card-wrapper">
                         <div className="card-img">
                              <img src={Gokul}/>
                         </div>   
                         <div className="details">
                              <h5>Gokul</h5>
                         </div>                
                     </div>
                     <div className="card-wrapper">
                     <div className="card-img">
                          <img src={Dinesh}/>
                     </div>   
                     <div className="details">
                          <h5>Dinesh</h5>
                     </div>                
                 </div>
                 <div className="card-wrapper">
                 <div className="card-img">
                      <img src="https://instagram.fmaa2-2.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/29716915_438922896544005_802299165043326976_n.jpg?tp=1&_nc_ht=instagram.fmaa2-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=3EIgBYg8DMsAX_WVH7e&oh=8c8dfac228dadc2105b0715fb9ce40ae&oe=606B2CE3"/>
                 </div>   
                 <div className="details">
                      <h5>Bala Ajith</h5>
                 </div>                
             </div>
             <div className="card-wrapper">
                     <div className="card-img">
                          <img src={Jeeva}/>
                     </div>   
                     <div className="details">
                          <h5>Jeevanantham</h5>
                     </div>                
                 </div>

                      
               </Slider>
          </div>
               
                   
          )
     }
}

export default team
