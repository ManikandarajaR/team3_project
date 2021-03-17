import React ,{Component}from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './css/home.css';
import  Kaviya from './images/20MCR033.jpeg';
import Eraj from './images/20MCR019.jpeg';
import Bakiya from './images/20MCR009.jpeg'
import Abhitha from './images/20MCR002.jpeg'
import Kavin from './images/20MCR030.jpeg';
import Dinesh from './images/20MCR016.jfif';
import Gokul from './images/20MCA021.jpeg';
import Team from './team';

class Home extends Component{
     render(){
          return(
               <div>
               <section>
                    <div class="hero-image">
                         <div class="hero-text">
                              <h1>Let's enjoy the wonders of nature</h1>
                              <p>Wanderers</p>
                               <button className="btn btn-danger">
                                     Summer Offer  
                               </button>
                         </div>
                       
                    </div>
               </section>
                    
               <section id="team">
               <Team/>
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
          );
     }

     }

    

export default Home;