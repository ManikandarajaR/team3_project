import React from 'react';
import "./css/contact.css";

const Contact = () =>{

     return(
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
     );
}

export default Contact;