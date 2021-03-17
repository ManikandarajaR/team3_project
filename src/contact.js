import React from 'react';
import "./css/contact.css";

const Contact = () =>{

     return(
          <div>
          <section id="contact">
          
          <div className="form-card">
               <div className="text-center">
                    <h2 className="card-title ">For your Queries</h2>4
               </div>
               <form>
                    <div class="mb-3">
                         <input type="text" class="form-control" placeholder="Name" id="Name" />
                    </div>
                    <div class="mb-3">
                         <input type="Email" class="form-control" placeholder="Email" id="Email"/>
                    </div> 
                    <div class="mb-3">
                         <input type="text" class="form-control" placeholder="Any Queries" id="Queries" />
                    </div>      
               </form>    
               <div class="text-center">
                    <button type="submit " class="btn btn-danger">Submit</button>
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
     );
}

export default Contact;