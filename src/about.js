import React,{Component} from 'react';

import './css/about.css';
import Slider from "react-slick";
import  Kaviya from './images/20MCR033.jpeg';
import Eraj from './images/20MCR019.jpeg';
import Bakiya from './images/20MCR009.jpeg'
import Abhitha from './images/20MCR002.jpeg'
import Kavin from './images/20MCR030.jpeg';
import Dinesh from './images/20MCR016.jfif';
import Gokul from './images/20MCA021.jpeg';


class About extends Component {
     render(){  
return(
     <div>
    
          <div className="banner">

               <h1>Welcome Guys</h1>

          </div>

          <section id="blog-content" className="pb-5">

               <div className="container pt-5 blog">
                    <div className="row mb-5 ">
                         <div className="col-md-7 mb-card">
                            <img src="https://media.holidayme.com/wp-content/uploads/2016/07/26125046/shutterstock_447658693-Halong-Bay.jpg"/>
                            </div>
                         
                         <div className="col-md-5" >
                              <div className="card">
                                 <div className="title text-center">
                                        <h3 className="p-4">Our Mission</h3>
                                        <p className="p-5 ">We empower you with the insights you need to win your market.
                                        SimilarWeb gives you global multi-device market intelligence to understand, track and grow your digital market share.</p>
                                 </div>                
                              </div>
                         </div>
                    </div>
                    <div className="row">
                    <div className="col-md-5 mb-card" >
                         <div className="card">
                            <div className="title text-center">
                                   <h3 className="p-4">Our Mission</h3>
                                   <p className="p-5 ">We empower you with the insights you need to win your market.
                                   SimilarWeb gives you global multi-device market intelligence to understand, track and grow your digital market share.</p>
                            </div>                
                         </div>
                    </div>
                    <div className="col-md-7">
                       <img src="https://www.aljazeera.com/wp-content/uploads/2019/12/ff518a741d944848a5ba90a94a2d354c_18.jpeg?fit=1000%2C562"/>
                       </div>
                    
                    
               </div>
               </div>
               </section> 
               <footer>
               <div className="container">
                    <div className="footer-top">
                    <div className="row">
                         <div className="col-md-3">
                              <div className="title">
                                   <h4>About Us !!</h4>
                                   <hr/>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis metus scelerisque, faucibus risus eu, luctus est. Vestibulum ante ipsum primis in faucibusLorem ipsum dolor sit amet,</p>
                              </div>
                         </div>

                         <div className="col-md-3">
                              <div className="title">
                                   <h4>Recent Blogs</h4>
                                   <hr/>
                                   
                                        <a href="">Vacation</a>
                                     <br/>
                                         <a href="">Recent posts</a>
                                      <br/>  
                                        <a href="">Images</a>
                                         
                              </div>
                         </div>
                         <div className="col-md-3  ">
                              <div className="title">
                              <h4>Gallery </h4>
                              <hr/>
                              <div className="row footer-b footer-img">
                                        <div className="col-md-4">
                                             <img src="https://i.pinimg.com/originals/28/bc/d0/28bcd0d7e9310764a99dbb27c65cdf60.jpg"/>
                                        </div>
                                        <div className="col-md-4">
                                             <img src="https://images-cdn.9gag.com/photo/aMY7d5G_700b.jpg"/>
                                        </div>
                                        <div className="col-md-4">
                                             <img src="https://i.pinimg.com/originals/a1/1f/b4/a11fb432a03b2eea292ae39591d149ec.jpg"/>
                                        </div>
                                   </div>
                              <div className="row footer-img">
                                   <div className="col-md-4">
                                        <img src="https://i.pinimg.com/originals/28/bc/d0/28bcd0d7e9310764a99dbb27c65cdf60.jpg"/>
                                   </div>
                                   <div className="col-md-4">
                                        <img src="https://images-cdn.9gag.com/photo/aMY7d5G_700b.jpg"/>
                                   </div>
                                   <div className="col-md-4">
                                        <img src="https://i.pinimg.com/originals/a1/1f/b4/a11fb432a03b2eea292ae39591d149ec.jpg"/>
                                   </div>
                              </div>
                         </div>
                         </div>
                         <div className="col-md-3 dubai">
                         <div className="title">
                         <h4>Address</h4>
                         <hr/>
                         <p>Number 6 , <br/>Vivekananthar theru, <br/> Dubai Main road, <br/> Dubai Kuruku sandhu, <br/> Dubai </p>
                    </div>
                         </div>
                    </div>
               </div>
               </div>
          </footer>
          </div>
         
)
     }

}

export default About;