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
                         <div className="footer">
                         <h4>Developed by Team 3</h4>
                         </div>
                    </footer>
               </div>
          );
     }

     }

    

export default Home;