import React from 'react'
import './css/blog.css';


import {Link} from "react-router-dom";

const blog = () => {
     return (
          <div id="blog">
               <br/>
                    <div className="container">
                         <div className="row">
                              <div className="col-md-8">
                                   <div className="card" id="card">
                                        <div className="title">
                                            <h2>Vacation Home Rentals: Unique Places We’ve Stayed At</h2>
                                        </div>
                                        <div className="row">
                                             <div className="col-md-5 ">
                                                  <img  id="blog-img" src="https://static.toiimg.com/photo/msid-59381739,width-96,height-65.cms"/>
                                             </div>
                                             <div className="col-md-7">
                                                  <p id="blog-p" >Can’t decide between a vacation home rental and a hotel? When we travel we prefer to stay in vacation home rentals rather than in resorts. Why? We believe that discovering a place has several components. …</p>
                                             <div className="text-center">
                                                  <button className="btn btn-primary">
                                                       Read more....
                                                  </button>
                                             </div> 
                                             </div>
                                        </div>
                                   </div>
                                   <div className="card" id="card">
                                        <div className="title">
                                            <h2>Vacation Home Rentals: Unique Places We’ve Stayed At</h2>
                                        </div>
                                        <div className="row">
                                             <div className="col-md-5 ">
                                                  <img  id="blog-img" src="https://gumlet.assettype.com/vikatan%2F2019-07%2F38469c5e-f3e3-43c2-86bb-3cf175f7c64f%2Frajaraja_cholan_11_20360.jpg?auto=format%2Ccompress&w=1200"/>
                                             </div>
                                             <div className="col-md-7">
                                                  <p id="blog-p" >Can’t decide between a vacation home rental and a hotel? When we travel we prefer to stay in vacation home rentals rather than in resorts. Why? We believe that discovering a place has several components. …</p>
                                                  <div className="text-center">
                                                  <button className="btn btn-primary">
                                                       Read more....
                                                  </button>
                                             </div> 
                                             </div>
                                        </div>
                                   </div>
                                   <div className="card" id="card">
                                        <div className="title">
                                            <h2>Vacation Home Rentals: Unique Places We’ve Stayed At</h2>
                                        </div>
                                        <div className="row">
                                             <div className="col-md-5 ">
                                                  <img  id="blog-img" src="https://pbs.twimg.com/media/Dol5l2wUYAE11Eq.jpg"/>

                                             </div>
                                             <div className="col-md-7">
                                                  <p id="blog-p" >Can’t decide between a vacation home rental and a hotel? When we travel we prefer to stay in vacation home rentals rather than in resorts. Why? We believe that discovering a place has several components. …</p>
                                                  <div className="text-center">
                                                  <button className="btn btn-primary">
                                                       Read more....
                                                  </button>
                                             </div> 
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-md-4" id="fixed">
                              <div className="card" id="card">
                                        <div className="title text-center">
                                              <Link to="/offer" class="nav-link" >Offer</Link>
                                        </div>
                                        
                                   </div>
                                   <div className="card" id="card">
                                        <div className="title text-center">
                                             <p>Comments</p>
                                        </div>
                                        
                                   </div>
                              </div>
                          </div>
                    </div>
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

export default blog;