import React from 'react'
import '../css/tophead.css';

const Top = () => {
     return (
          <div>

            <div id="tophead">
              
                <div className="container">
                    <div id="quick-contact">
                        <ul>
                            <li class="quick-call">
                              <a href=""><i class="fas fa-phone"></i>8725275323</a>
                            </li>
                            <li class="quick-email">
                              <a href="mailto:manikandanraja1204@gmail.com"><i class="fas fa-envelope-square"></i>team3@gmail.com</a>
                            </li>
                            <li class="quick-address">
                              <a href="" ><i class="far fa-map"></i>Erode</a>			
                            </li>
                        </ul>
                    </div>
               
                      <div class="header-social-wrapper">
                              <div class="social-links default">
                                      <ul>
                                          <li>
                                            <a href="http://facebook.com" ><i class="fab fa-facebook"></i></a>
                                          </li>
                                          <li>
                                            <a href="http://twitter.com"><i class="fab fa-twitter"></i></a>
                                          </li>
                                          <li>
                                            <a href="http://instagram.com"><i class="fab fa-instagram"></i></a>
                                          </li>
                                          <li>
                                            <a href="http://youtube.com"><i class="fab fa-youtube"></i></a>
                                          </li>
                                          <li>
                                            <a href="http://linkedin.com"><i class="fab fa-linkedin-in"></i></a>
                                          </li>
                                      </ul>
                              </div>		
                      </div>

                      </div>
                      </div>
               </div>

          
     )
}

export default Top;
