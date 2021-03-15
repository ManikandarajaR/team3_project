import React from 'react';
import "./css/offer.css"

const offer = () =>{
     return(
          <section id="offer">

          <h1 className="text-center pt-5">Popular Destinations Offered</h1>
          <p className="text-center mt-3">World's best tourist destination</p>
          
          <div class="container">
             
                    <div className="card-width">
                         <img src="https://demo.wenthemes.com/travel-gem/wp-content/uploads/sites/65/2018/10/tirp11-400x500.jpg"/>
                         <div className="card-content">
                              <p>Australia</p>
                         </div>  
                    </div>
                    
                    <div className="card-width">
                    <img href="" src="https://demo.wenthemes.com/travel-gem/wp-content/uploads/sites/65/2018/10/trip-12-400x500.jpg"/>
                         <div className="card-content">
                              <p><a href="">France</a></p>
                         </div>  
                         
                    </div>
                    
                    <div className="card-width">
                         <img href="" src="https://demo.wenthemes.com/travel-gem/wp-content/uploads/sites/65/2018/03/trip6-400x500.jpg"/>
                         <div className="card-content">
                              <p>Italy</p>
                         </div>  
                    </div>
                    <div className="card-width">
                         <img src="https://demo.wenthemes.com/travel-gem/wp-content/uploads/sites/65/2018/10/tirp11-400x500.jpg"/>
                         <div className="card-content">
                              <p>Sydney</p>
                         </div>
                     </div>
                </div>
       
          </section>
        
     )
}

export default offer;